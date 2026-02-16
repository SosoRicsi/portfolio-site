"use client"

import { useEffect, useRef, useCallback } from "react"

export function HoneycombBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const mouseRef = useRef({ x: -1000, y: -1000 })
	const animFrameRef = useRef<number>(0)

	const drawHexagon = useCallback(
		(
			ctx: CanvasRenderingContext2D,
			cx: number,
			cy: number,
			radius: number,
			mouseX: number,
			mouseY: number,
			isDark: boolean
		) => {
			const dx = cx - mouseX
			const dy = cy - mouseY
			const dist = Math.sqrt(dx * dx + dy * dy)
			const maxDist = 220
			const proximity = Math.max(0, 1 - dist / maxDist)

			ctx.beginPath()
			for (let i = 0; i < 6; i++) {
				const angle = (Math.PI / 3) * i - Math.PI / 6
				const x = cx + radius * Math.cos(angle)
				const y = cy + radius * Math.sin(angle)
				if (i === 0) ctx.moveTo(x, y)
				else ctx.lineTo(x, y)
			}
			ctx.closePath()

			if (isDark) {
				const baseAlpha = 0.06
				const glowAlpha = baseAlpha + proximity * 0.18
				ctx.strokeStyle = `rgba(59, 130, 246, ${glowAlpha})`
				ctx.lineWidth = 0.8 + proximity * 1.2

				if (proximity > 0.1) {
					ctx.fillStyle = `rgba(59, 130, 246, ${proximity * 0.06})`
					ctx.fill()
				}
			} else {
				const baseAlpha = 0.08
				const glowAlpha = baseAlpha + proximity * 0.25
				ctx.strokeStyle = `rgba(37, 99, 235, ${glowAlpha})`
				ctx.lineWidth = 0.6 + proximity * 1.0

				if (proximity > 0.1) {
					ctx.fillStyle = `rgba(59, 130, 246, ${proximity * 0.05})`
					ctx.fill()
				}
			}

			ctx.stroke()
		},
		[]
	)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext("2d")
		if (!ctx) return

		let dpr = window.devicePixelRatio || 1

		const resize = () => {
			dpr = window.devicePixelRatio || 1
			canvas.width = window.innerWidth * dpr
			canvas.height = window.innerHeight * dpr
			canvas.style.width = `${window.innerWidth}px`
			canvas.style.height = `${window.innerHeight}px`
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
		}

		resize()

		const handleMouseMove = (e: MouseEvent) => {
			mouseRef.current = { x: e.clientX, y: e.clientY }
		}

		window.addEventListener("mousemove", handleMouseMove)
		window.addEventListener("resize", resize)

		const draw = () => {
			const w = window.innerWidth
			const h = window.innerHeight
			const isDark = document.documentElement.classList.contains("dark")

			ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
			ctx.clearRect(0, 0, w, h)

			const hexRadius = 40
			const hexWidth = hexRadius * Math.sqrt(3)
			const hexHeight = hexRadius * 2
			const rowHeight = hexHeight * 0.75

			const cols = Math.ceil(w / hexWidth) + 2
			const rows = Math.ceil(h / rowHeight) + 2

			for (let row = -1; row < rows; row++) {
				for (let col = -1; col < cols; col++) {
					const offset = row % 2 === 0 ? 0 : hexWidth / 2
					const cx = col * hexWidth + offset
					const cy = row * rowHeight

					drawHexagon(
						ctx,
						cx,
						cy,
						hexRadius,
						mouseRef.current.x,
						mouseRef.current.y,
						isDark
					)
				}
			}

			animFrameRef.current = requestAnimationFrame(draw)
		}

		draw()

		return () => {
			cancelAnimationFrame(animFrameRef.current)
			window.removeEventListener("mousemove", handleMouseMove)
			window.removeEventListener("resize", resize)
		}
	}, [drawHexagon])

	return (
		<canvas
			ref={canvasRef}
			className="pointer-events-none fixed inset-0 z-0"
			aria-hidden="true"
		/>
	)
}
