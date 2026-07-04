'use client'

import { useEffect, useState } from 'react'

const links = [
	{ href: '#kezdolap', label: 'Kezdőlap' },
	{ href: '#rolam', label: 'Rólam' },
	{ href: '#kapcsolat', label: 'Kapcsolat' },
]

export function SiteNav() {
	const [open, setOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24)
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300  ${
				scrolled ? 'border-b border-border bg-background/85 backdrop-blur-md' : 'border-b border-transparent'
			}`}
		>
			<nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
				<a href="#kezdolap" className="group flex items-center gap-2.5">
					<span className="font-serif font-bold text-lg tracking-wide text-foreground">
						Jarkó Richárd
					</span>
				</a>
		
				<div className="hidden items-center gap-8 md:flex">
					{links.map((l) => (
						<a
							key={l.href}
							href={l.href}
							className="relative text-[0.95rem] text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
						>
							{l.label}
						</a>
					))}
				</div>
		
				<button
					onClick={() => setOpen((o) => !o)}
					aria-label="Menü"
					aria-expanded={open}
					className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
				>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
						{open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
					</svg>
				</button>
			</nav>
		
			{open && (
				<div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
					<div className="mx-auto flex max-w-5xl flex-col px-5 py-3">
						{links.map((l) => (
							<a
								key={l.href}
								href={l.href}
								onClick={() => setOpen(false)}
								className="border-b border-border/60 py-3 text-muted-foreground transition-colors hover:text-accent"
							>
								{l.label}
							</a>
						))}
					</div>
				</div>
			)}
		</header>
	)
}
