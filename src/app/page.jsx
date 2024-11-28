/** @format */

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Hero from "../../public/undraw_online_test_re_kyfx.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.col}>
          <h1 className={styles.title}>Your online shop destination!</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            ligula at ex iaculis faucibus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <Link href='/Proudct'>
            <button className={styles.button}>Shop Now!</button>
          </Link>
        </div>
        <div className={styles.col}>
          <Image src={Hero} alt='hero ' />
        </div>
      </div>
    </>
  );
}
