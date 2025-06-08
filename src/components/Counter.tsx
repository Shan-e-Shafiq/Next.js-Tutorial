'use client'
import React, { useState } from 'react'

export default function Counter() {

    const [Count, setCount] = useState(0)

    return (
        <div className='flex justify-between items-center gap-5'>
            <div>Counter {Count}</div>
            <button onClick={() => { setCount(prev => prev + 1) }}>{"->"}</button>
        </div>
    )
}
