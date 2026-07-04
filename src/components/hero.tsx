export function Hero() {
	return (
		<section
			id="kezdolap"
			className="relative flex min-h-screen items-center overflow-hidden"
		>
			{/* Historical map background */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: 'url(/images/map.jpg)' }}
				aria-hidden="true"
			/>
			<div className="absolute inset-0 bg-background/82" aria-hidden="true" />
				<div
					className="absolute inset-0"
					style={{
						background:
							'radial-gradient(ellipse at 50% 40%, transparent 0%, var(--background) 78%)',
					}}
					aria-hidden="true"
				/>
				
			<div className="relative mx-auto w-full max-w-4xl px-5 pt-28 pb-16 text-center">
				<span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-card/60 px-4 py-1.5 text-sm tracking-wide text-accent-foreground backdrop-blur-sm">
				  	<span className="h-1.5 w-1.5 rounded-full bg-accent" />
				  	A történelem szerelmese
				</span>

				<h1 className="mt-8 text-balance font-serif text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
					Üdvözöllek,
					<br />
					<span className="text-accent italic">Jarkó Richárd</span> vagyok
				</h1>

				<p className="mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
					Győri fiatal, akit gyerekkora óta lenyűgöz a múlt — önkéntes
					tárlatvezető a{" "}
					<a
						href={"https://romer.hu"}
						className={"underline decoration-dotted underline-offset-2 hover:underline-offset-3 transition-all"}
						target={"_blank"}>Rómer Flóris Múzeumban
					</a>.
				</p>

				<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a
						href="#rolam"
						className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 text-primary-foreground transition-transform hover:-translate-y-0.5"
					>
						Ismerj meg
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
							<path d="M5 12h14M13 6l6 6-6 6" />
						</svg>
					</a>
					<a
						href="#kapcsolat"
						className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-7 py-3 text-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
					>
						Kapcsolat
					</a>
				</div>
			</div>
		</section>
	)
}
