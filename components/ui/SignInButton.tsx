'use client'

import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export default function SignInButton() {
    const { data: session, status } = useSession()

    if (status === 'loading') {
        return <>...</>
    }

    if (status === 'authenticated') {
        return (
            <Link href='/dashboard'>
                <Image
                    src={session.user?.image!}
                    alt={session.user?.name!}
                    width={32}
                    height={32}
                />
            </Link>
        )
    }

    return <button onClick={() => signIn()}>Sign In</button>
}
