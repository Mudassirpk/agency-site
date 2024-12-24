import Image from "next/image";
import Link from 'next/link';

export default function Hero() {
  return <section className="container mx-auto relative my-4">
    <div className="w-full flex flex-col mobile:flex-row-reverse">
      <div className="relative w-full mobile:w-1/2 min-h-48 mobile:h-[530px]">
        <Image alt="Design | Development | Motion" className="object-contain" src={'/images/hero-image.png'} fill />
      </div>
      <div className="mobile:hidden py-6 px-4 font-playfair flex flex-col items-center gap-4">
        <h1 className="text-4xl text-center">
          Designing Experience,
          <strong>Moving </strong> Ideas, Building the <strong>Web</strong>
        </h1>
        <p className="text-center mt-2 text-lg text-gray-700">We bring your brand to life with stunning motion design and intuitive user experiences.”</p>
        <Link href="/" className="p-2 text-white hover:bg-gray-700 bg-mw-gray text-lg">Hire our agency</Link>
      </div>
    </div>

    <div className="hidden mobile:flex flex-col font-playfair p-4 gap-4 justify-center top-0 absolute w-full h-full">
      <div className="max-w-[60%] flex flex-col gap-4">
        <h1 className="lg:text-7xl text-5xl">
          Designing Experience,
          <strong>Moving </strong> Ideas, Building the <strong>Web</strong>
        </h1>
        <p className="mt-2 text-lg text-gray-700">We bring your brand to life with stunning motion design and intuitive user experiences.”</p>
        <Link href="/" className="p-2 max-w-max hover:bg-gray-700 text-white bg-mw-gray text-lg">Hire our agency</Link>
      </div>
    </div>
  </section>
}
