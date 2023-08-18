'use client'

import { signOut } from 'next-auth/react'

export default function SignOutbutton() {
    return <button onClick={() => signOut()}>Sign Out</button>
}
