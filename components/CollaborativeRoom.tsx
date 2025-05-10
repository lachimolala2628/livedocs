'use client'

import React from 'react'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";

const CollaborativeRoom = () => {
    return (
        <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                <div className='collaborative-room'>
                    <Header>
                        <div className='flex items-center w-fit justify-center gap-2'>
                            <p className='document-title'>Share</p>
                        </div>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </Header>
                    <Editor />
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default CollaborativeRoom