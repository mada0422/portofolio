import { ReactNode } from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import CTA from "./CTA"

type Props = {
    eyebrow?: string
    heading: string
    description?: string
    children: ReactNode
    showCTA?: boolean
}

export default function PageScaffold({ eyebrow, heading, description, children, showCTA = true }: Props) {
    return (
        <div className="bg-porcelain text-ink min-h-screen relative overflow-hidden pt-32 pb-36">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(61,90,241,0.12),_transparent_55%)] pointer-events-none" aria-hidden />
            <div className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-ink/5 to-transparent left-1/2 opacity-40 pointer-events-none" aria-hidden />

            <div className="relative z-10 space-y-16">
                <Navigation />

                <section className="px-6 text-center max-w-3xl mx-auto space-y-4">
                    {eyebrow ? (
                        <p className="text-sm uppercase tracking-[0.4em] text-accent">{eyebrow}</p>
                    ) : (
                        <span className="h-px w-12 bg-accent mx-auto block" />
                    )}
                    <h1 className="text-3xl md:text-4xl font-bold text-ink">{heading}</h1>
                    {description && <p className="text-ink/70">{description}</p>}
                </section>

                {children}

                {showCTA && <CTA />}
                <Footer />
            </div>
        </div>
    )
}

