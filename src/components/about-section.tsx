"use client"

const skills = [
	{ name: "React / Next.js", level: 95 },
	{ name: "TypeScript", level: 90 },
	{ name: "Node.js", level: 85 },
	{ name: "Tailwind CSS", level: 92 },
	{ name: "PostgreSQL", level: 80 },
	{ name: "Figma / UI Design", level: 75 },
]

export function AboutSection() {
	return (
		<section id="about" className="relative z-10 px-6 py-24 md:py-32">
			<div className="mx-auto max-w-6xl">
				<div className="mb-4 text-center">
					<span className="text-sm font-semibold uppercase tracking-widest text-primary">
						Rólam
					</span>
				</div>
				<h2 className="mb-16 text-center text-3xl font-bold text-foreground md:text-4xl">
					Ismerd meg a hátterem
				</h2>

				<div className="md:w-xl flex justify-center mx-auto">
					{/* Bio */}
					<div>
						<div className="rounded-xl border border-border/50 bg-card/60 p-8 backdrop-blur-sm">
							<h3 className="mb-4 text-xl font-semibold text-foreground">
								Ki vagyok én?
							</h3>
							<div className="space-y-4 text-muted-foreground leading-relaxed">
								<p>
									Több mint 4 éve foglalkozom weboldalfejlesztéssel, pár hónappal ezelőttig csak hobbiból, azóta viszont már 3 komoly projekten is dolgozom. Célom, hogy minden projektemből a lehető legtöbbet hozzam ki felhasználói élményben, és a legtöbbet tanulhassak belőlük.
								</p>
								<p>
									18 éves vagyok, esti tagozatú gimnáziumban tanulok. Mindent amit a webfejlesztéssel kapcsolatosan tudok, magamtól, autodidakta módon tanultam meg.
								</p>
								<p>
									Szabadidőmben egy történelmi blogon, és egy törtenelem tanuló alkalmazáson dolgozom, melyek hamarosan publikusak lesznek.
								</p>
							</div>

							{/* Tech stack tags */}
							<div className="mt-6 flex flex-wrap gap-2">
								{[
									"Next.js",
									"TypeScript",
									"Tailwind css",
									"MySQL",
									"PHP",
									"Laravel",
									"Github",
									"Redis",
								].map((tech) => (
									<span
										key={tech}
										className="rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
