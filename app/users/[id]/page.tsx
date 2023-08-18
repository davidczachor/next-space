import { prisma } from '@/lib/prisma'
import { Metadata } from 'next'
import Image from 'next/image'

interface Props {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const user = await prisma.user.findUnique({
        where: {
            id: params.id,
        },
    })
    return {
        title: `User profile of ${user?.name}`,
    }
}

export default async function UserProfile({ params }: Props) {
    const user = await prisma.user.findUnique({
        where: {
            id: params.id,
        },
    })
    const { name, bio, image } = user!

    return (
        <div>
            <h1>{name}</h1>
            <Image
                src={image!}
                alt={name!}
                width={200}
                height={200}
            />
            <p>{bio}</p>
        </div>
    )
}
