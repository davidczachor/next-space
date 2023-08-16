export const dynamic = 'force-static'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About our company',
}

export default async function About() {
  return (
    <main>
      <h1>About</h1>
      <p>We are a social media company!</p>
    </main>
  )
}
