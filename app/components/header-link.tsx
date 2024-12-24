'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HeaderLink({ title, link, onClick }: { title: string, link: string, onClick?: () => void }) {
  const pathname = usePathname();

  return (
    <Link
      onClick={() => {
        if (onClick) {
          onClick()
        }
      }}
      className={`hover:font-bold p-2 ${pathname === link && 'font-bold'}`} href={link}>
      {title}
    </Link>
  )
}

