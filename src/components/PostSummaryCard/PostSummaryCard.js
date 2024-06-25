import React from 'react'
import Link from 'next/link'
import { Image } from 'react-datocms/image'
import styles from './postSummaryCard.module.css'

function PostSummaryCard({ coverImage, title, slug }) {
    return (
        <div className={styles.postCard}>

            <Link href={`/${slug}`} className={styles.imageContainer}>
                <Image data={coverImage} className={styles.image} />
            </Link>
            <Link href={`/${slug}`} className={styles.titleContainer}>
                {title}
            </Link>

        </div>
    )
}

export default PostSummaryCard