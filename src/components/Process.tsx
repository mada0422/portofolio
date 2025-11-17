const phases = [
    {
        title: "01 · Discovery",
        desc: "We define the product ambition, success metrics, and constraints through workshops and rapid research.",
        deliverables: "Vision deck, success map, prioritized opportunities."
    },
    {
        title: "02 · Design & systems",
        desc: "Translate insights into flows, prototypes, and design systems that scale across touchpoints.",
        deliverables: "Interactive prototypes, component library, content guidance."
    },
    {
        title: "03 · Build & launch",
        desc: "Ship production-ready Next.js experiences with a focus on performance and maintainability.",
        deliverables: "Prod-ready codebase, testing pipelines, post-launch support."
    }
]

export default function Process() {
    return (
        <section id="process" className="py-24 px-6">
            <div className="max-w-5xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <p className="text-sm uppercase tracking-[0.35em] text-accent">Operating model</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-ink">A deliberate end-to-end process</h2>
                    <p className="text-ink/70 max-w-3xl mx-auto">
                        Every build is anchored in strategy, shaped through design rigor, and hardened in code. You get
                        clear checkpoints, async-friendly collaboration, and documentation that keeps teams aligned.
                    </p>
                </div>

                <div className="space-y-6">
                    {phases.map((phase, index) => (
                        <article key={phase.title} className="rounded-[32px] border border-ink/10 bg-white p-8 md:p-10 flex flex-col gap-4 md:flex-row md:items-start md:gap-10 shadow-sm">
                            <div className="text-accent font-semibold text-sm tracking-[0.3em]">{phase.title}</div>
                            <div className="flex-1 space-y-4">
                                <p className="text-lg text-ink font-medium">{phase.desc}</p>
                                <p className="text-sm text-ink/60">
                                    <span className="text-ink/80">Outputs:</span> {phase.deliverables}
                                </p>
                            </div>
                            <span className="text-4xl text-ink/10 font-black">{String(index + 1).padStart(2, "0")}</span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

