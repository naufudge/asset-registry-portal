import Image from 'next/image'

// border-radius: 15px;
// background: linear-gradient(92deg, #4C3CAC 1.68%, #7761FF 100%);
// box-shadow: 10px 10px 4px 5px rgba(0, 0, 0, 0.25);

export default function Home() {
  return (
    <div className='mt-20 mb-5'>
      <h1 className='py-5 text-center text-6xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500'>
        Asset Registry Portal
      </h1>
    {/* <div className='container'>
      <div className='row'>
        <div className='box'>Goodbye World</div>
        <div className='box'>Goodbye World</div>
      </div>
      <div className='row'>
        <div className='box'>Goodbye World</div>
        <div className='box'>Goodbye World</div>
      </div>
    </div> */}
    </div>
  )
}
