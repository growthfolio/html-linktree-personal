import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Felipe Macedo | Portfólio antigo',
  description: 'Página antiga. Perfil profissional atual em felipemacedo.me.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" data-theme="dark" className="scroll-smooth">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased">
        {children}
      </body>
    </html>
  )
}
