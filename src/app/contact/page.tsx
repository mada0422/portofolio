import Contact from "@/components/Contact"
import PageScaffold from "@/components/PageScaffold"

export default function ContactPage() {
    return (
        <PageScaffold
            eyebrow="Get in touch"
            heading="Tell me about your product vision"
            description="Share timelines, goals, and team context—I'll reply within two business days with next steps and availability."
            showCTA={false}
        >
            <Contact />
        </PageScaffold>
    )
}

