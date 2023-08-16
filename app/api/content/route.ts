const posts = [
  {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Dolor Sit Amet',
    slug: 'dolor-sit-amet',
    content:
      'dolor sit amet, consectetur adipiscing elit. integer nec odio. praesent libero. sed cursus ante dapibus diam. sed nisi.',
  },
  {
    title: 'Consectetur Adipiscing',
    slug: 'consectetur-adipiscing',
    content:
      'consectetur adipiscing elit. morbi leo risus, porta ac consectetur ac, vestibulum at eros. nulla vitae elit libero, a pharetra augue.',
  },
  {
    title: 'Eiusmod Tempor',
    slug: 'eiusmod-tempor',
    content:
      'eiusmod tempor incididunt ut labore et dolore magna aliqua. donec id elit non mi porta gravida at eget metus.',
  },
  {
    title: 'Labore et Dolore',
    slug: 'labore-et-dolore',
    content:
      'labore et dolore magna aliqua. fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
  },
  {
    title: 'Minim Veniam',
    slug: 'minim-veniam',
    content:
      'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. curabitur blandit tempus porttitor.',
  },
]

import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json(posts)
}
