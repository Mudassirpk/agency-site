import Link from "next/link"
import Image from "next/image"

export default function PortfolioItem() {
  return <div className="aspect-square font-poppins relative rounded bg-gray-100">
    <Image alt="portfolio image" src={'/images/hero-image.png'} fill className="object-contain" />
    <div className="absolute transition-all group duration-300 rounded w-full flex flex-col items-center p-4 justify-end h-full">
      <Link href={'/'} className="border bg-mw-gray rounded-full mobile:opacity-0 group-hover:opacity-100 px-3 py-1 hover:border-mw-gray hover:text-mw-gray hover:bg-white text-lg text-white">View</Link>
    </div>
  </div>
}
