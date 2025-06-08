'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {

    const router = useRouter()


    async function HandleForm(formData: FormData) {
        const data = Object.fromEntries(formData.entries())
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        // console.log(await res.json())
        if (res.status == 200) {
            router.replace('/')
        }
    }


    return (
        <section className='h-screen bg-white flex justify-center items-center'>
            <form action={HandleForm} className="border border-slate-300 rounded-2xl w-1/3 p-4 bg-white text-black shadow-lg">
                <h1 className='text-2xl mb-4'>Login</h1>
                <input type="text" name='email' placeholder='Enter your email' className='w-full h-12 border border-slate-300 bg-white shadow-lg rounded-xl px-4 mb-4' />
                <input type="password" name='password' placeholder='Enter your password' className='w-full h-12 border border-slate-300 bg-white shadow-lg rounded-xl px-4 mb-4' />
                <button className='w-full h-12 bg-black text-white rounded-xl hover:shadow-lg transition-all duration-900 cursor-pointer'>Login</button>
            </form>
        </section>
    )
}
