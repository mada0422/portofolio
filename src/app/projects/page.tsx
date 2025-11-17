import PageScaffold from "@/components/PageScaffold"
import Projects from "@/components/Projects"

export default function ProjectsPage() {
    return (
        <PageScaffold
            eyebrow="Case studies"
            heading="Projects engineered for real traction"
            description="Deep partnerships with teams across SaaS, commerce, and developer tools. Each engagement blends product strategy, design systems, and hands-on engineering."
        >
            <Projects />
        </PageScaffold>
    )
}

