'use client';

import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { MdWhatsapp } from 'react-icons/md';
import { GoMail } from 'react-icons/go';
import { BiPlus } from 'react-icons/bi';
import HeaderLink from './header-link';

export default function () {
  const [open, setOpen] = useState(false);

  const whatsapp = '03138974826'
  const email = 'mudassir.pk.mp@gmail.com'
  return (
    <header className='w-full mobile:hidden'>
      <div className='p-4 flex justify-between items-center'>
        <GiHamburgerMenu className='text-3xl' onClick={() => setOpen(!open)} />
        <Link href={'/'}><h1 className="text-3xl text-mw-gray">Markweb</h1></Link>
        <div className='flex gap-4 items-center'>
          <Link href={`mailto:${email}`}>
            <GoMail className='text-2xl' />
          </Link>
          <Link href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Auto message: Markweb")}`}>
            <MdWhatsapp className='text-2xl' />
          </Link>
        </div>
      </div>
      {
        open &&
        <div className='w-full mobile:hidden fixed min-h-screen z-[100000] flex flex-col gap-2 bg-white p-4 top-0'>
          <div className='w-full flex justify-between items-center'>
            <Link href={'/'}>
              <h2 className="text-3xl text-mw-gray">Markweb</h2>
            </Link>
            <BiPlus className='rotate-45 text-4xl hover:text-gray-700' onClick={() => {
              setOpen(!open)
            }} />
          </div>
          <nav className="flex flex-col my-4 gap-4">
            <HeaderLink onClick={() => setOpen(false)} title="Home" link="/" />
            <HeaderLink onClick={() => setOpen(false)} title="Portfolio" link="/portfolio" />
            <HeaderLink onClick={() => setOpen(false)} title="Services" link="/services" />
            <HeaderLink onClick={() => setOpen(false)} title="About" link="/about" />
            <HeaderLink onClick={() => setOpen(false)} title="Blog" link="/blog" />
          </nav>
        </div>
      }

    </header>
  )
}

