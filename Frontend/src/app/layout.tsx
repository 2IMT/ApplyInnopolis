import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { Metadata } from 'next'
import Header from './components/header'
import Menu from './components/menu'

export const metadata: Metadata = {
  title: 'Apply Innopolis: Tests',
  description: '',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Menu/>
        {children}
      </body>
    </html>
  )
}
