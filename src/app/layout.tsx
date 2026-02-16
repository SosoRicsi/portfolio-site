import type {Metadata, Viewport} from "next"
import {Inter, JetBrains_Mono} from "next/font/google"
import {ThemeProvider} from "@/components/theme-provider"
import {Navbar} from "@/components/navbar"
import {HoneycombBackground} from "@/components/honeycomb-background"
import {Footer} from "@/components/footer"

import "./globals.css"

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
	title: "Jarkó Richárd | Webfejlesztő Portfolio",
	description:
		"Modern webalkalmazások fejlesztése Next.js, Tailwind css és Laravel segítségével.",
	keywords: ['Next.js', 'Laravel', 'MySQL', 'tailwindcss', 'portfolio', 'webfejlesztés', 'Jarkó Richárd', 'modern'],
}

export const viewport: Viewport = {
	themeColor: [
		{media: "(prefers-color-scheme: dark)", color: "#0f1117"},
		{media: "(prefers-color-scheme: light)", color: "#f5f7fa"},
	],
}

export default function RootLayout({
									   children,
								   }: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="hu" suppressHydrationWarning>
		<body
			className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
		>
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem={false}
				disableTransitionOnChange
			>
				<HoneycombBackground/>
				<Navbar/>
				<main className="relative z-10 pt-[73px]">{children}</main>
				<Footer/>
			</ThemeProvider>
		</body>
		</html>
	)
}
