/** @format */

import React from "react";
import styles from "./about.module.css";
import imgContainer from "../../../../public/OIP.jpeg";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainers}>
          <Image
            src={imgContainer}
            className={styles.image}
            fill={true}
            alt='Handcrafting award winning digital experiences'
          />
          <div className={styles.imgText}>
            <h1>The biggest mobile market</h1>
            <h2>We are the best market and job we have</h2>
          </div>
        </div>

        <div className={styles.textContainer}>
          <div className={styles.item}>
            <h1 className={styles.title}>Who Are We?</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
              beatae, a suscipit eos. Animi quibusdam cum omnis officiis
              <br />
              <br />
              voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam
              iure esse tempora beatae, a suscipit eos. Animi quibusdam cum
              omnis officiis voluptatum quo ea eveniet?
            </p>
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>What We Do?</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              - Creative Illustrations
              <br />
              <br /> - Dynamic Websites
              <br />
              <br /> - Fast and Handy
              <br />
              <br /> - Mobile Apps
            </p>
            <Link href="/contact" >
              <button className={styles.button} >Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
