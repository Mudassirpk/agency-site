import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return <section className="my-8">
    <h2 className="w-full text-center text-4xl font-semibold text-mw-gray">Portolio</h2>
    <div className="w-full grid grid-cols-2 flex-wrap my-4 px-4 gap-2 items-center">
      <div className="px-2 py-1 border text-center rounded-full">
        Graphics Design
      </div>
      <div className="px-2 py-1 border text-center rounded-full">
        Motion Design
      </div>
      <div className="px-2 py-1 border text-center rounded-full">
        Web development
      </div>
      <div className="px-2 py-1 border text-center rounded-full">
        Video Editing
      </div>
    </div>
    <div className="w-full p-2 gap-2 grid grid-cols-2">
      <div className="h-44 rounded bg-gray-100">
        <div className="absolute rounded w-full flex flex-col justify-end h-full">
          <Link href={'/'} className="\">View</Link>
        </div>
      </div>
      <div className="h-44 bg-gray-100">
      </div>
    </div>
  </section>
}
