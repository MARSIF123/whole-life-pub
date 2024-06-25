import React from 'react'
import styles from './header.module.css'
import image from '../../../public/Favicon.png'
import Image from 'next/image'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoImage}>
        <Image src={image} className={styles.img} alt='logo-wholelifepub' priority={true} />
      </div>
      <div className={styles.nav}>
        <Navbar />
        <Search />
      </div>
    </div>
  )
}

export default Header