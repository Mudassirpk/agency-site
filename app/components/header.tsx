import Link from "next/link";
import HeaderLink from "./header-link";

export default function Header() {
  return <header className="w-full font-poppins">
    <div className="container justify-between mx-auto p-4 items-center hidden mobile:flex">
      <Link href={'/'}><h1 className="text-3xl font-bold text-mw-gray">Markweb</h1></Link>
      <nav className="flex gap-4 items-center">
        <HeaderLink title="Home" link="/"></HeaderLink>
        <HeaderLink title="Portfolio" link="/portfolio"></HeaderLink>
        <HeaderLink title="Services" link="/services"></HeaderLink>
        <HeaderLink title="About" link="/about"></HeaderLink>
        <HeaderLink title="Blog" link="/blog"></HeaderLink>
      </nav>
      <div>
        <Link href={'/'} className="p-2 bg-mw-gray hover:bg-gray-800 text-white">Contact us</Link>
      </div>
    </div>
  </header>
}
