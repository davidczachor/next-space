import Image from 'next/image'
import styles from './NavMenu.module.css'
import Link from 'next/link'
import SignInButton from './ui/SignInButton'
import AuthCheck from './auth/AuthCheck'
import SignOutbutton from './ui/SignOutButton'

export default function NavMenu() {
    return (
        <nav className={styles.nav}>
            <Link href='/'>
                <Image
                    src='/public/logo.svg'
                    width={216}
                    height={30}
                    alt='NextSpace Logo'
                />
            </Link>

            <ul className={styles.links}>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/blog'>Blog</Link>
                </li>
                <li>
                    <Link href='/users'>Users</Link>
                </li>
                <li>
                    <SignInButton />
                </li>
                <AuthCheck>
                    <li>
                        <SignOutbutton />
                    </li>
                </AuthCheck>
            </ul>
        </nav>
    )
}
