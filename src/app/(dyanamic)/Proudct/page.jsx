/** @format */

"use client";
import React from "react";
import styles from "./blog.module.css";
import { product } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
export default function Blog() {


  return (
    <div className={styles.container}>
      <div className={styles.product}>
        {product.map((item, index) => (
          <div key={index} className={styles.item}>
            <Link href={`/Proudct/${item.id}`}>
              <Image className={styles.imge} src={item.image} alt={item.name} />
            </Link>
            <h3 className={styles.name}>{item.name}</h3>
            <button className={styles.view} >
              <Link href={`/Proudct/${item.id}`}>
                View Details
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
