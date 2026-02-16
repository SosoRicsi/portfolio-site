"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const navLinks = [
	{ href: "/", label: "Kezdolap" },
	{ href: "/szolgaltatasok", label: "Szolgaltatasok" },
	{ href: "/projektek", label: "Projektek" },
]

function SunIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
		>
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2" />
			<path d="M12 20v2" />
			<path d="m4.93 4.93 1.41 1.41" />
			<path d="m17.66 17.66 1.41 1.41" />
			<path d="M2 12h2" />
			<path d="M20 12h2" />
			<path d="m6.34 17.66-1.41 1.41" />
			<path d="m19.07 4.93-1.41 1.41" />
		</svg>
	)
}

function MoonIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
		>
			<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
		</svg>
	)
}

function MenuIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	)
}

function CloseIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
		>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	)
}

export function Navbar() {
	const pathname = usePathname()
	const { theme, setTheme } = useTheme()
	const [mobileOpen, setMobileOpen] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<Link
					href="/"
					className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
				>
					{'<'}
					<span className="text-primary">Dev</span>
					{'/>'}
				</Link>

				{/* Desktop nav */}
				<div className="hidden items-center gap-8 md:flex">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`text-sm font-medium transition-colors hover:text-primary ${
								pathname === link.href
									? "text-primary"
									: "text-muted-foreground"
							}`}
						>
							{link.label}
						</Link>
					))}
					<button
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						className="rounded-lg border border-border bg-secondary p-2 text-foreground transition-colors hover:bg-muted"
						aria-label="Tema valtas"
					>
						{mounted && theme === "dark" ? <SunIcon /> : <MoonIcon />}
					</button>
				</div>

				{/* Mobile toggle */}
				<div className="flex items-center gap-3 md:hidden">
					<button
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						className="rounded-lg border border-border bg-secondary p-2 text-foreground transition-colors hover:bg-muted"
						aria-label="Tema valtas"
					>
						{mounted && theme === "dark" ? <SunIcon /> : <MoonIcon />}
					</button>
					<button
						onClick={() => setMobileOpen(!mobileOpen)}
						className="rounded-lg border border-border bg-secondary p-2 text-foreground transition-colors hover:bg-muted"
						aria-label="Menu"
					>
						{mobileOpen ? <CloseIcon /> : <MenuIcon />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{mobileOpen && (
				<div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
					<div className="flex flex-col gap-1 px-6 py-4">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setMobileOpen(false)}
								className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary ${
									pathname === link.href
										? "bg-primary/10 text-primary"
										: "text-muted-foreground"
								}`}
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	)
}
