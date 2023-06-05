import {
    Bai_Jamjuree as BaiJamjuree,
    Roboto_Flex as Roboto,
} from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Valorant',
  description: 'Um jogo de tiro tático 5x5 com personagens originais',
}

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <html lang="pt-br">
    <body
      className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
    >
      <main className="grid min-h-screen">{children}</main>
    </body>
  </html>
)

export default Layout
