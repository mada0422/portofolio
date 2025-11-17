import './globals.css'
import { ReactNode } from 'react'


export const metadata = {
title: 'Portfolio — Your Name',
description: 'Frontend developer portfolio'
}


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body>
<main className="min-h-screen">{children}</main>
</body>
</html>
)
}