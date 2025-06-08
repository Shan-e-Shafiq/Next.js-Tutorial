import React from 'react'

type props = {
    params: { id: string }
}

export default function page(props: props) {

    const { id } = props.params

    return (
        <div>Product {id}</div>
    )
}
