'use client'

import React, { useEffect, useState } from 'react'

type User = {
    id: number,
    name: string
}


export default function page() {

    const [Users, setUsers] = useState<User[]>([])
    const [Loading, setLoading] = useState(true)

    // in client component, we can use relative end points for route handlers

    useEffect(() => {
        async function fetchUsers() {
            const res = await fetch('/api/users')
            const users = await res.json()
            setUsers(users)
            setLoading(false)
        }
        fetchUsers()
    }, [])


    return (
        <div>
            {Loading ? "Loading" : Users.map((user: User) => (
                <div key={user.id} className="p-3 bg-white text-black w-fit flex flex-row gap-2 mb-3 rounded-lg">
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                </div>
            ))}
        </div>
    )
}
