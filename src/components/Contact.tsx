export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-white to-porcelain text-ink">
            <div className="max-w-5xl mx-auto px-6">
                <div className="rounded-[36px] border border-ink/10 bg-white/90 backdrop-blur p-8 md:p-12 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center shadow-xl">
                    <div className="space-y-6">
                        <p className="text-sm uppercase tracking-[0.4em] text-accent">Let’s collaborate</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-ink">Ready to build something modern?</h2>
                        <p className="text-ink/70">
                            Tell me about your timeline, challenges, and desired outcomes. I’ll reply within two business
                            days with next steps and a suggested engagement model.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="mailto:hello@example.com" className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/30">
                                hello@example.com
                            </a>
                            <a href="https://cal.com" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-ink/10 text-ink hover:bg-ink/5 transition">
                                Book a 30 min intro ↗
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {[
                            { label: "Location", value: "Remote · GMT+2" },
                            { label: "Preferred engagements", value: "3–6 month retainers · Product sprints" },
                            { label: "Focus areas", value: "SaaS · Commerce · Developer tools" }
                        ].map((item) => (
                            <div key={item.label} className="rounded-2xl border border-ink/10 bg-porcelain p-5">
                                <p className="text-xs uppercase tracking-[0.3em] text-ink/50">{item.label}</p>
                                <p className="mt-2 text-ink font-semibold">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}