import './globals.css'
import { Inter } from 'next/font/google'
// import Navbar from '@/components/navbar/Navbar'
import Search from '../components/search/Search'
import Items from '../components/items/items'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Asset Registry Portal',
  description: 'Browse the Asset Registry of NAM',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* <Navbar/> */}
        {children}
        <Search/>
        <Items/>
      </body>
    </html>
  )
}
