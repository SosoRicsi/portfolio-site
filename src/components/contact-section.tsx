"use client"

import {useState, type FormEvent} from "react"

export function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	})
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		setSubmitted(true)
		setFormData({name: "", email: "", subject: "", message: ""})
		setTimeout(() => setSubmitted(false), 4000)
	}

	return (
		<section id="contact" className="relative z-10 px-6 py-24 md:py-32">
			<div className="mx-auto max-w-6xl">
				<div className="mb-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Kapcsolat
          </span>
				</div>
				<h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">
					Vedd fel velem a kapcsolatot
				</h2>
				<p className="mx-auto mb-16 max-w-lg text-center text-muted-foreground">
					Van egy ötleted vagy projekted? Írj nekem és hamarosan visszajelzek!
				</p>

				<div className="grid gap-12 lg:grid-cols-5">
					{/* Contact info */}
					<div className="space-y-6 lg:col-span-2">
						{[
							{
								icon: (
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
									>
										<rect width="20" height="16" x="2" y="4" rx="2"/>
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
									</svg>
								),
								label: "Email",
								value: "ricsi.swp@gmail.com",
							},
							{
								icon: (
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
									>
										<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
										<circle cx="12" cy="10" r="3"/>
									</svg>
								),
								label: "Hely",
								value: "Győr, Magyarország",
							},
						].map((item) => (
							<div
								key={item.label}
								className="flex items-start gap-4 rounded-xl border border-border/50 bg-card/60 p-5 backdrop-blur-sm"
							>
								<div
									className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
									{item.icon}
								</div>
								<div>
									<p className="text-sm font-medium text-muted-foreground">
										{item.label}
									</p>
									<p className="font-medium text-foreground">{item.value}</p>
								</div>
							</div>
						))}

						{/* Social Links */}
						<div className="flex gap-3 pt-2">
							{[
								{
									label: "GitHub",
									path: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
									link: "https://github.com/SosoRicsi",
								},/*
								{
									label: "LinkedIn",
									path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z",
									extra: <circle cx="4" cy="4" r="2"/>,
								},*/
							].map((social) => (
								<a
									key={social.label}
									href={social.link}
									className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
									aria-label={social.label}
									target={"_blank"}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d={social.path}/>
									</svg>
								</a>
							))}
						</div>
					</div>

					{/* Contact Form */}
					<div className="lg:col-span-3">
						<form
							onSubmit={handleSubmit}
							className="rounded-xl border border-border/50 bg-card/60 p-8 backdrop-blur-sm"
						>
							{submitted && (
								<div
									className="mb-6 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
									Köszönöm az üzenetet! Hamarosan válaszolok!
								</div>
							)}

							<div className="grid gap-5 sm:grid-cols-2">
								<div>
									<label
										htmlFor="name"
										className="mb-2 block text-sm font-medium text-foreground"
									>
										Név
									</label>
									<input
										id="name"
										type="text"
										required
										value={formData.name}
										onChange={(e) =>
											setFormData({...formData, name: e.target.value})
										}
										className="w-full rounded-lg border border-input bg-background/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
										placeholder="A te neved"
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="mb-2 block text-sm font-medium text-foreground"
									>
										E-mail
									</label>
									<input
										id="email"
										type="email"
										required
										value={formData.email}
										onChange={(e) =>
											setFormData({...formData, email: e.target.value})
										}
										className="w-full rounded-lg border border-input bg-background/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
										placeholder="email@pelda.hu"
									/>
								</div>
							</div>

							<div className="mt-5">
								<label
									htmlFor="subject"
									className="mb-2 block text-sm font-medium text-foreground"
								>
									Tárgy
								</label>
								<input
									id="subject"
									type="text"
									required
									value={formData.subject}
									onChange={(e) =>
										setFormData({...formData, subject: e.target.value})
									}
									className="w-full rounded-lg border border-input bg-background/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
									placeholder="pl.: Projekt megbeszeles"
								/>
							</div>

							<div className="mt-5">
								<label
									htmlFor="message"
									className="mb-2 block text-sm font-medium text-foreground"
								>
									Üzenet
								</label>
								<textarea
									id="message"
									required
									rows={5}
									value={formData.message}
									onChange={(e) =>
										setFormData({...formData, message: e.target.value})
									}
									className="w-full resize-none rounded-lg border border-input bg-background/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
									placeholder="Írd le a projekted részleteit..."
								/>
							</div>

							{/*<button
								type="submit"
								className="mt-6 w-full rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110 sm:w-auto"
								disabled
							>
								Üzenet küldése
							</button>*/}
							<i>Hamarosan...</i>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
