export const dynamic = 'force-dynamic';

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ContactSection />
		</>
	)
}
