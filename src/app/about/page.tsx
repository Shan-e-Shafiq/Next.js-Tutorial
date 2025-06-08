import React from 'react'

export default async function page() {

    // for the server components, we can directly hardcode sensitive information in them or import throught an env file, It is safe
    // for server components, we need the api url, but in client component, we can user relative end points like /api/users because browser knows the domain

    const response = await fetch(`http://localhost:3000/api/users`, { method: 'GET' })
    const users = await response.json()

    return (
        <div>
            {users.map((user: any) => (
                <div key={user.id} className="p-3 bg-white text-black w-fit flex flex-row gap-2 mb-3 rounded-lg">
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                </div>
            ))}
        </div>
    )
}
