export default function About() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <p className="text-sm uppercase tracking-[0.35em] text-accent">About the practice</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-ink">Design ops meets modern engineering</h2>
                    <p className="text-ink/70 max-w-3xl mx-auto">
                        I help startups and product teams translate ambiguity into confident shipping plans.
                        Expect structured discovery, transparent communication, and thoughtful craft across every touchpoint.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Strategy",
                            detail: "Insight-driven workshops, roadmap definition, KPI alignment."
                        },
                        {
                            title: "Experience",
                            detail: "Design systems, prototyping, accessibility audits, micro-interactions."
                        },
                        {
                            title: "Engineering",
                            detail: "Next.js, TypeScript, performance budgets, deployment pipelines."
                        }
                    ].map((item) => (
                        <div key={item.title} className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm">
                            <div className="text-sm uppercase tracking-[0.3em] text-ink/50">{item.title}</div>
                            <p className="mt-4 text-ink/80">{item.detail}</p>
                        </div>
                    ))}
                </div>

                <div className="rounded-[32px] border border-ink/10 bg-gradient-to-br from-cloud via-porcelain to-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-md">
                    <div>
                        <h3 className="text-2xl font-semibold text-ink">Hands-on partner from kickoff to launch</h3>
                        <p className="mt-3 text-ink/70 max-w-xl">
                            I plug into your team as a product-minded contributor—facilitating workshops, designing flows,
                            writing production code, and aligning stakeholders around outcomes.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-white p-6 border border-ink/10 shadow-sm">
                        <p className="text-sm uppercase tracking-[0.3em] text-ink/60">Toolbox</p>
                        <p className="mt-3 text-ink font-semibold">Next.js · React 19 · TypeScript · Tailwind · Figma · Supabase · Vercel · Notion</p>
                    </div>
                </div>
            </div>
        </section>
    )
}