import React from 'react'

type props = {
    params: {
        category: string,
        id: string
    }
}

export default function page(props: props) {

    const { category, id } = props.params

    return (
        <div>goods - {category} - {id}</div>
    )
}
