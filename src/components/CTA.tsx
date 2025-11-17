export default function CTA() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto rounded-[40px] border border-ink/10 bg-gradient-to-br from-porcelain via-white to-porcelain p-10 md:p-14 text-center space-y-6 shadow-xl">
                <p className="text-sm uppercase tracking-[0.4em] text-ink/60">Next engagement</p>
                <h2 className="text-3xl md:text-4xl font-bold text-ink">
                    Let’s prototype the future of your product in 6 weeks.
                </h2>
                <p className="text-ink/70 max-w-3xl mx-auto">
                    Partner with a designer-engineer who can translate product vision into high-fidelity prototypes,
                    systems, and production-grade apps—without the handoff tax.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="mailto:hello@example.com" className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/30">
                        hello@example.com
                    </a>
                    <a href="https://cal.com" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-ink/10 text-ink hover:bg-ink/5 transition">
                        Schedule chemistry call ↗
                    </a>
                </div>
            </div>
        </section>
    )
}

