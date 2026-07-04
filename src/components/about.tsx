import Image from "next/image";

function SectionLabel({children}: { children: React.ReactNode }) {
	return (
		<span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
      		<span className="h-px w-8 bg-accent"/>
			{children}
    	</span>
	)
}

export function About() {
	return (
		<section id="rolam" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
			<div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
				<div className="relative">
					<div className="overflow-hidden rounded-lg border border-border shadow-sm">
						<Image
							src="/images/parchment.png"
							alt="Régi pergamen kézírással, pecséttel és lúdtollal"
							className="h-full w-full object-cover"
							width={2560}
							height={1440}
						/>
					</div>
				</div>

				<div>
					<SectionLabel>Rólam</SectionLabel>
					<h2 className="mt-5 text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
						A múlt megértése
						<br/>
						a jelen kulcsa
					</h2>

					<div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
						<p>
							Győri fiatal vagyok, akit már gyerekkora óta érdekel a történelem. Különösen az <span className={"font-semibold"}>ókor</span> és a <span className={"font-semibold"}>középkor</span> világa áll közel hozzám.
						</p>
						<p>
							Önkéntesként a győri {" "}
							<a 
								href={"https://romer.hu"} 
							   className={"underline decoration-dotted underline-offset-2 hover:underline-offset-3 transition-all"} 
							   target={"_blank"}>Rómer Flóris Művészeti és Történeti Múzeumban
							</a>{" "}
							dolgozom, ahol teremőrként és tárlatvezetőként segítek abban, hogy a látogatók közelebb kerüljenek a múlt emlékeihez.
						</p>
					</div>

					<div className="mt-8 flex flex-wrap gap-2">
						{['Ókor', 'Középkor', 'Görög mitológia'].map((tag) => (
							<span
								key={tag}
								className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-secondary-foreground"
							>
                			{tag}
              				</span>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
