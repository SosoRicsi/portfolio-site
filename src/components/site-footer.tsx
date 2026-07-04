export function SiteFooter() {
	return (
		<footer className="border-t border-border bg-background">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
				<div className="flex items-center gap-2.5">
					<span className="font-serif text-foreground font-semibold">
            			Jarkó Richárd
          			</span>
				</div>

				<nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
					<a href="#rolam" className="transition-colors hover:text-accent">Rólam</a>
					<a href="#kapcsolat" className="transition-colors hover:text-accent">Kapcsolat</a>
				</nav>

				<p className="text-sm text-muted-foreground">
					© 2026 Jarkó Richárd · Célom a történelem
				</p>
			</div>
		</footer>
	)
}
