import Link from "next/link"

const links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" }
]

export default function Navigation() {
    return (
        <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/85 border-b border-black/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-ink">
                <Link href="/" className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-semibold">
                        YN
                    </span>
                    <div>
                        <p className="text-sm text-ink/70 uppercase tracking-[0.4em]">Portfolio</p>
                        <p className="text-ink font-semibold text-lg leading-tight">Your Name</p>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm text-ink/70">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-ink transition">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <Link href="/contact" className="px-5 py-2 rounded-full border border-black/10 text-ink text-sm hover:bg-ink/5 transition">
                    Start a project
                </Link>
            </div>
        </header>
    )
}

