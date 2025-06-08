import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    // when navigating between pages, only page content re-renders, but layout.tsx don't
    return (
        <div>
            <div>This is a featured products section</div>
            {children}
        </div>
    )
}
