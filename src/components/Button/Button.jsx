"use client"
import React from 'react'
import styles from "./button.module.css"
export default function Button({text}) {
  return (
   <>
        <button  className={styles.Button}  onClick={()=> console.log('snmc') }>
            {text}
        </button>
   </>
  )
}
