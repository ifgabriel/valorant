import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'VALORANT',
  description: 'Um jogo de tiro tático 5x5 com personagens originais',
}

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <html lang="pt-br">
    <body className="text-gray-100` bg-gray-900 font-sans">
      <main className="grid min-h-screen">{children}</main>
    </body>
  </html>
)

export default Layout
