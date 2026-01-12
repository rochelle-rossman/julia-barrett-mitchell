import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative">
      <video autoPlay loop muted className="w-full h-auto" src="/WebsiteReel_2.mp4" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-25 backdrop-blur-sm hover:invisible">
        <Image src={'/btbfilms.svg'} alt="Logo" fill className="min-h-1/2" />
      </div>
    </div>
  )
}
