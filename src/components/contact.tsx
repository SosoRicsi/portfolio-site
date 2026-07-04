function MailIcon() {
	return (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<rect x="3" y="5" width="18" height="14" rx="2" />
			<path d="m3 7 9 6 9-6" />
		</svg>
	)
}

function PinIcon() {
	return (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
			<circle cx="12" cy="10" r="3" />
		</svg>
	)
}

function MuseumIcon() {
	return (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M3 21h18M4 21V10M20 21V10M12 3 3 8h18l-9-5zM8 21v-8M12 21v-8M16 21v-8" />
		</svg>
	)
}

export function Contact() {
	return (
		<section id="kapcsolat" className="border-t border-border bg-secondary/40">
			<div className="mx-auto max-w-4xl px-5 py-24 md:py-32">
				<div className="mx-auto max-w-2xl text-center">
          			<span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            			<span className="h-px w-8 bg-accent" />
            				Kapcsolat
						<span className="h-px w-8 bg-accent" />
          			</span>
					<h2 className="mt-5 text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
						Keress bátran
					</h2>
					<p className="mt-4 text-lg leading-relaxed text-muted-foreground">
						Kérdésed van, vagy beszélgetnél a múltról? Örömmel hallok felőled.
					</p>
				</div>

				<div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
					<div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center">
            			<span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
              				<MailIcon />
            			</span>
						<div>
							<p className="text-sm text-muted-foreground">Email</p>
							<p className="text-foreground">jarkorichard@gmail.com</p>
						</div>
					</div>
					<div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center">
						<span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
              				<PinIcon />
            			</span>
						<div>
							<p className="text-sm text-muted-foreground">Hely</p>
							<p className="text-foreground">Győr, Magyarország</p>
						</div>
					</div>
					<div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center">
						<span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
							<MuseumIcon />
						</span>
						<div>
							<p className="text-sm text-muted-foreground">Megtalálsz</p>
							<p className="text-foreground">Rómer Flóris Múzeum</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
