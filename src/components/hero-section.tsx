"use client"

import { useEffect, useState } from "react"

const roles = [
	"Full-stack Fejlesztő",
	"Weboldal készítő",
	"Történelem szerető",
]

export function HeroSection() {
	const [roleIndex, setRoleIndex] = useState(0)
	const [charIndex, setCharIndex] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)

	useEffect(() => {
		const currentRole = roles[roleIndex]
		let timeout: NodeJS.Timeout

		if (!isDeleting && charIndex < currentRole.length) {
			timeout = setTimeout(() => setCharIndex((c) => c + 1), 80)
		} else if (!isDeleting && charIndex === currentRole.length) {
			timeout = setTimeout(() => setIsDeleting(true), 2000)
		} else if (isDeleting && charIndex > 0) {
			timeout = setTimeout(() => setCharIndex((c) => c - 1), 40)
		} else if (isDeleting && charIndex === 0) {
			setIsDeleting(false)
			setRoleIndex((r) => (r + 1) % roles.length)
		}

		return () => clearTimeout(timeout)
	}, [charIndex, isDeleting, roleIndex])

	const displayText = roles[roleIndex].slice(0, charIndex)

	return (
		<section
			id="hero"
			className="relative flex min-h-screen items-center justify-center px-6"
		>
			<div className="relative z-10 max-w-3xl text-center">
				<div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
					<span className="text-sm font-medium text-primary">
						Nyitott új projektekre
					</span>
				</div>

				<h1 className="mb-4 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
					Üdvözöllek, <br />
					<span className="text-primary">Jarkó Richárd</span> vagyok
				</h1>

				<div className="mb-8 h-10 md:h-12">
					<p className="text-xl font-medium text-muted-foreground md:text-2xl">
						{displayText}
						<span className="ml-0.5 animate-pulse text-primary">|</span>
					</p>
				</div>

				<p className="mx-auto mb-10 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
					Modern, gyors és megbízható webalkalmazásokat építek, amelyek segítik a vállalkozásod növekedését.
				</p>

				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a
						href="#contact"
						className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
					>
						Kapcsolat
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M5 12h14" />
							<path d="m12 5 7 7-7 7" />
						</svg>
					</a>
					<a
						href="/projektek"
						className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
					>
						Munkáim
					</a>
				</div>

				{/* Stats */}
				<div className="mt-16 flex items-center justify-center gap-8 md:gap-16">
					{[
						{ value: "4", label: "Év tapasztalat" },
						/*{ value: "3", label: "Projekt" },*/
					].map((stat) => (
						<div key={stat.label} className="text-center">
							<p className="text-2xl font-bold text-primary md:text-3xl">
								{stat.value}
							</p>
							<p className="mt-1 text-xs text-muted-foreground md:text-sm">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
