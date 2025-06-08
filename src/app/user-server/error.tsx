'use client'
import React, { useEffect } from 'react'

export default function error({ error }: { error: Error }) {

    useEffect(() => {
        console.log(error)
    }, [error])


    return (
        <div className='text-red-500'>⚠ Error Fetching users {':('}</div>
    )
}
