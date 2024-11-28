import Link from 'next/link'
import React from 'react'
import styles from "./Navbar.module.css"
import Button from '../Button/Button'
import {Montserrat} from "next/font/google"
import DarkMode from '../DarkMode/DarkMode'

const LogoFont =  Montserrat({subsets: ["latin"], weight: "900"})
export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={`${styles.log} ${LogoFont.className} `} > HEXASHOP </Link>

        <div className={styles.links}>
          <DarkMode />
          <Link href="/">Home</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/Proudct">Product</Link>
         
          <Button text="logout" />
         </div>
      </div>
    </>
  )
}
