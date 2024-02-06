import { auth } from '@/auth';
import { UserButton } from '@/components/auth/user-button';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

export default async function Profile() {
    const session = await auth();
    return (
        <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            <div className='w-[500px] bg-white rounded-md p-5 flex justify-center items-center'>
                <div className='w-20 h-20 flex justify-start items-center'>
                    <UserButton />
                </div>
                <div className='w-full grid'>
                    <h1 className='text-xl'>{session?.user.name}</h1>
                    <h1 className='text-base'>@{session?.user.username}</h1>
                </div>
            </div>
            <p>{session?.user.username}</p>
                <button className='w-full bg-black p-3 m-3'>Follow</button>
            <div className=''>
            </div>

        </main>
    )
}
