import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Search from '@/components/Search'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Records Room Inventory',
  description: 'View Records Room Inventory',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar/>
        {children}
        <Search/>
      </body>
      {/* <div className='gradient'/> */}
    </html>
  )
}
