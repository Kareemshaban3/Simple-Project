/** @format */

import React from "react";
import styles from "./footer.module.css";
import social1 from "../../../public/1.png";
import social2 from "../../../public/2.png";
import social3 from "../../../public/3.png";
import social4 from "../../../public/4.png";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <p> ©2024 Hexashop. All rights reserved </p>
        </div>
        <div className={styles.social}>
          <Image src={social1} alt="" />
          <Image src={social2} alt="" />
          <Image src={social3} alt="" />
          <Image src={social4} alt="" />
        </div>
      </div>
    </>
  );
}
