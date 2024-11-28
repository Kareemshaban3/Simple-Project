import Image from 'next/image'
import React from 'react'
import imgContact from "../../../../public/contact.png";

import styles from "./contact..module.css"


export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Let s Keep in Touch</h1>
        <div className={styles.contact}>
          <div className={styles.imgContainer}>
            <Image fill={true} src={imgContact} alt='imgContact' className={styles.image}/>
          </div>
          <div className={styles.form}>
            <input
              type='text'
              className={styles.input}
              placeholder='Name'
              id=''
            />
            <input
              type='email'
              placeholder='Email'
              className={styles.input}
              id=''
            />
            <textarea
              name=''
              placeholder='Put Your Massage'
              className={styles.textarea}
              id=''
            ></textarea>
            <button className={styles.button}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );

};


