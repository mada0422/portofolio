import PageScaffold from "@/components/PageScaffold"
import Process from "@/components/Process"

export default function ProcessPage() {
    return (
        <PageScaffold
            eyebrow="Operating model"
            heading="A calm, transparent way to ship premium work"
            description="From discovery sessions to production launch, every checkpoint is designed to keep stakeholders aligned and momentum high."
        >
            <Process />
        </PageScaffold>
    )
}

