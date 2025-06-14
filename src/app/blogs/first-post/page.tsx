'use client'

import React, { useState } from 'react'

export default function page() {

    async function fileUploader(e: React.FormEvent) {
        e.preventDefault()
        const formData = new FormData()
        if (!File) {
            return
        }
        for (const file of File) {
            formData.append('files', file)
        }
        const res = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        })
        const data = await res.json()
        console.log(data)
    }

    const [File, setFile] = useState<any>([])


    return (
        <form onSubmit={fileUploader}>
            <input
                type="file"
                accept='images/*'
                multiple
                onChange={(e: any) => {
                    setFile((prev: any) => {
                        return [...prev, ...e.target.files]
                    })
                }}
            />
            <button type="submit">Upload</button>
        </form>
    )
}
