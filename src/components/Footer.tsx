export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-40 py-6 border-t border-ink/10 bg-white/90 backdrop-blur text-ink/70 text-sm">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p>© {new Date().getFullYear()} Your Name. Crafted with Next.js.</p>
                <div className="flex gap-5">
                    <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-ink">Dribbble</a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-ink">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-ink">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}

