import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import React from 'react'

const Documents = () => {
    return (
        <div>
            <Header>
                <div className='flex items-center w-fit justify-center gap-2'>
                    <p className='document-title'>This a document title</p>
                </div>
            </Header>
            <Editor />
        </div>
    )
}

export default Documents