import React from 'react'
import { useParams } from 'react-router-dom'
const Test = () => {

    const { id } = useParams();

    return (
        id ? <p> my Id is {id}</p> : <div>No Id</div>
    )
}

export default Test