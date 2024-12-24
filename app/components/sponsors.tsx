import Image from "next/image";

export default function Sponsors() {
  return <section className="mobile:container w-[90%] flex-wrap my-8 rounded mx-auto grid grid-cols-4 max-[520px]:grid-cols-2 shadow-lg p-2">
    <div className="relative h-28">
      <Image alt="sponsor" src={'/images/s1.png'} className="object-contain" fill />
    </div>
    <div className="relative h-28">
      <Image alt="sponsor" src={'/images/s2.png'} className="object-contain" fill />
    </div>
    <div className="relative h-28">
      <Image alt="sponsor" src={'/images/s3.png'} className="object-contain" fill />
    </div>
    <div className="relative h-28">
      <Image alt="sponsor" src={'/images/s4.png'} className="object-contain" fill />
    </div>
  </section>
}
