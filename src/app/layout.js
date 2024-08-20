import './globals.css'
import { Inter } from 'next/font/google'
import Search from '../components/search/Search'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Asset Registry Portal',
  description: 'Browse the Asset Registry of NAM',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Quicksand:wght@300&display=swap" rel="stylesheet" />
          
        </head>
      <body className="bg-gray-100">
        {children}
        {/* <Search/> */}
      </body>
    </html>
  )
}
