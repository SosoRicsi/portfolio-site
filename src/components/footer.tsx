export function Footer() {
	return (
		<footer className="relative z-10 border-t border-border/50 bg-background/60 backdrop-blur-sm">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
				<p className="text-sm text-muted-foreground">
					{"© 2026 Kovacs Tamas. Minden jog fenntartva."}
				</p>
				<div className="flex items-center gap-6">
					<a
						href="https://github.com/SosoRicsi"
						className="text-sm text-muted-foreground transition-colors hover:text-primary"
						target={"_blank"}
					>
						GitHub
					</a>
					<a
						href="https://celom-a-tortenelem.eu"
						className="text-sm text-muted-foreground transition-colors hover:text-primary"
						target={"_blank"}
					>
						Célom a Történelem
					</a>
					<a
						href="mailto:ricsi.swp@gmail.com?subject=Weboldal%20k%C3%A9rd%C5%91jele"
						className="text-sm text-muted-foreground transition-colors hover:text-primary"
					>
						Email
					</a>
				</div>
			</div>
		</footer>
	)
}
