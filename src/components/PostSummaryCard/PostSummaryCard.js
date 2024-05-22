import React from 'react'
import Link from 'next/link'

function PostSummaryCard({ coverImage, title, slug }) {
    return (
        <div>
            <Link href={`/${slug}`}>
                {title}
            </Link>

        </div>
    )
}

export default PostSummaryCard