const logos = ["Solstice", "Northwind", "Velocity", "Atlas", "Sonder", "Aether"]

const stats = [
    { label: "Products shipped", value: "28" },
    { label: "Uptime across builds", value: "99.98%" },
    { label: "Avg. ROI lift", value: "3.4x" }
]

const services = [
    {
        title: "Vision sprint",
        desc: "2-week deep dives translating product intuition into validated direction."
    },
    {
        title: "Design systems",
        desc: "Design tokens, component libraries, guidelines, and implementation support."
    },
    {
        title: "End-to-end builds",
        desc: "Production-grade Next.js + TypeScript shipping with observability baked in."
    }
]

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-20">
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-primary/20 blur-[140px]" />
                <div className="absolute top-24 left-0 h-80 w-80 bg-accent/15 blur-[160px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(61,90,241,0.15),transparent_65%)]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 grid xl:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
                <div className="space-y-10">
                    <div className="space-y-4">
                        <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.5em] text-accent uppercase">
                            Fractional product partner
                            <span className="h-px w-10 bg-accent" />
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-ink">
                            Designing premium experiences where strategy, craft, and engineering move in lockstep.
                        </h1>
                        <p className="text-ink/70 text-lg leading-relaxed">
                            I embed with founders and product teams to prototype bold ideas, design scalable systems, and
                            ship production-grade apps that feel unmistakably modern.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a href="/process" className="px-7 py-3 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/30 transition hover:-translate-y-0.5">
                            Explore capabilities
                        </a>
                        <a href="/contact" className="px-7 py-3 rounded-full border border-ink/10 text-ink hover:bg-ink/5 transition">
                            Start a partnership
                        </a>
                    </div>

                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.35em] text-ink/50">Trusted by teams at</p>
                        <div className="flex flex-wrap gap-4 text-ink/70 text-sm">
                            {logos.map((logo) => (
                                <span key={logo} className="px-4 py-2 rounded-full border border-ink/10 bg-white shadow-sm">
                                    {logo}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-white to-transparent blur-3xl opacity-70" aria-hidden />

                    <div className="relative rounded-[36px] border border-ink/5 bg-white/90 backdrop-blur p-8 space-y-8 shadow-xl">
                        <div className="flex flex-wrap gap-4 justify-between items-center">
                            <div>
                                <p className="text-sm text-ink/60">Currently partnering with</p>
                                <p className="text-xl font-semibold text-ink">Series A+ teams</p>
                            </div>
                            <span className="text-xs px-3 py-1 rounded-full bg-ink/5 text-ink">Availability · Q2 2026</span>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="rounded-3xl border border-ink/10 bg-porcelain p-4">
                                    <p className="text-2xl font-semibold text-ink">{stat.value}</p>
                                    <p className="text-xs uppercase tracking-[0.25em] text-ink/50 mt-2">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-5">
                            {services.map((service) => (
                                <div key={service.title} className="flex gap-4">
                                    <div className="h-12 w-1 rounded-full bg-gradient-to-b from-primary to-accent" />
                                    <div>
                                        <p className="font-semibold text-ink">{service.title}</p>
                                        <p className="text-sm text-ink/60">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-3xl border border-ink/10 bg-porcelain p-5">
                            <p className="text-sm text-ink/70">
                                “Collaborating felt like adding a product-minded cofounder. We went from idea to polished launch in eight weeks.”
                            </p>
                            <p className="text-sm font-semibold text-ink mt-3">— Mira Chen, CEO · Sonder Cloud</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}