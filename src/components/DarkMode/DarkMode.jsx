"use client"
import React, { useContext } from 'react'
import styles from "./DarkMode.module.css"
import { ThemMode } from '@/context/ThemMode'
export default function DarkMode({}) {
  
const {toggleMode,isDarkMode} = useContext(ThemMode)

  return (
    <>
        <div className={styles.container} onClick={()=>toggleMode()} >
            <div className={styles.icon}>🌚</div>
            <div className={styles.icon}>🌞</div>
            <div className={styles.ball} style={isDarkMode === "light" ? {right : "5px"} : {left : "6px"} } />
        </div>
    </>
  )
}
