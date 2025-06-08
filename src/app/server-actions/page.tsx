import { revalidatePath } from 'next/cache'
import React from 'react'

export default async function page() {

    const res = await fetch("https://68447bfc71eb5d1be0336c96.mockapi.io/api/users")
    const users = await res.json()

    async function addUser(formData: FormData) {
        "use server";
        const name = formData.get('name')
        const res = await fetch("https://68447bfc71eb5d1be0336c96.mockapi.io/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Authorization':"Bearer AUTHORIZATION_TOKEN"
            },
            body: JSON.stringify({ name })
        })
        console.log(await res.json())
        revalidatePath('/server-actions')
    }


    return (
        <div className='grid grid-cols-4 gap-2 px-14'>
            <form action={addUser} className='flex flex-row gap-4 mb-5'>
                <input type="text" name='name' className='bg-white rounded-lg text-black' />
                <button type='submit' className='bg-blue-500 text-white px-3'>Add</button>
            </form>
            <div></div>
            <div></div>
            <div></div>
            {users.map((user: any) => (
                <div key={user.id} className="p-3 bg-white text-black w-full flex flex-row gap-2 mb-3 rounded-lg">
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                </div>
            ))}
        </div>
    )
}
