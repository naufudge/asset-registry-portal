import Image from 'next/image'
import Search from '../components/search/Search'

export default function Home() {
  return (
    <div className='mt-20 mb-5'>
      <h1 className='py-5 text-center text-6xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500'>
        Asset Registry Portal
      </h1>
      <Search/>
    </div>
  )
}
