import React from 'react'
import { useParams } from 'react-router-dom'

function PostDetailPage() {

    const { id } = useParams();

    console.log(id);

    return (
        <div>PostDetailPage</div>
    )
}

export default PostDetailPage