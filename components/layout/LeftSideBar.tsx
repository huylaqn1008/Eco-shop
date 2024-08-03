import { navLinks } from '@/lib/constants'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function LeftSideBar() {
    return (
        <div className='h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 shadow-xl bg-blue-2 max-lg:hidden'>
            <Image src='/logo.png' alt='logo' width={200} height={130} />

            <div className='flex flex-col gap-12'>
                {navLinks.map((link) => (
                    <Link href={link.url} key={link.label} className='flex gap-4 text-body-medium'>
                        {link.icon}
                        <p>{link.label}</p>
                    </Link>
                ))}
            </div>

            <div className='flex gap-4 text-body-medium items-center'>
                <UserButton />
                <p>Edit Profile</p>
            </div>
        </div>
    )
}

export default LeftSideBar