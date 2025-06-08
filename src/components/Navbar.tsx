'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

export default function Navbar() {

    const pathname = usePathname()
    // router.push()

    return (
        <div className='w-full flex justify-center items-center flex-row gap-6'>
            <Link href={'/'} className={pathname.startsWith('/') ? 'font-bold' : ''}>Home</Link>
            <Link href={'/about'} className={pathname.startsWith('/about') ? 'font-bold' : ''}>About</Link>
            <Link href={'/blogs/first-post'} className={pathname.startsWith('/blogs') ? 'font-bold' : ''}>Blogs</Link>
            <Link href={'/products/games'} className={pathname.startsWith('/products') ? 'font-bold' : ''}>Products</Link>
        </div>
    )
}
