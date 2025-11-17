const projects = [
    {
        title: "Velocity Dashboard",
        desc: "Operational intelligence platform for sustainable logistics.",
        stack: ["Next.js", "Tailwind", "Supabase"],
        highlights: "Real-time route planning, live collaboration, custom theming."
    },
    {
        title: "Northwind Commerce",
        desc: "Headless storefront powering a D2C skincare brand.",
        stack: ["Shopify", "Remix", "Storyblok"],
        highlights: "Composable CMS, personalized landing flows, 72% faster LCP."
    },
    {
        title: "Atlas Knowledge Hub",
        desc: "Interactive knowledge base powering a global fintech team.",
        stack: ["MDX", "Next.js", "Algolia"],
        highlights: "AI-assisted search, role-aware content, tiered access."
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 space-y-12">
                <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.4em] text-accent">Selected collaborations</p>
                    <h2 className="text-3xl md:text-4xl font-bold mt-3 text-ink">Impactful product launches</h2>
                    <p className="mt-4 text-ink/70 max-w-2xl mx-auto">
                        A mix of product strategy, systems thinking, and code craftsmanship. Each project is a
                        close partnership from discovery to post-launch iteration.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article key={project.title} className="group rounded-3xl border border-ink/10 bg-white p-6 flex flex-col gap-6 shadow-sm">
                            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/15 via-cloud to-accent/15 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(61,90,241,0.25),_transparent_70%)]" />
                                <div className="absolute -bottom-6 -right-10 h-32 w-32 rounded-full bg-accent/30 blur-3xl" />
                                <p className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.5em] text-ink/60">
                                    case study
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-2xl font-semibold text-ink">{project.title}</h3>
                                <p className="text-ink/70">{project.desc}</p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 rounded-full text-xs tracking-wide bg-porcelain border border-ink/10 text-ink/80">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto space-y-4">
                                <p className="text-sm text-ink/60">{project.highlights}</p>
                                <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent">
                                    View case study
                                    <span aria-hidden>↗</span>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}