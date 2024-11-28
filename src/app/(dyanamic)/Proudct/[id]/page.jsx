"use client";
import React from "react";
import { product } from "../../../../lib/data";
import Image from "next/image";
import styles from "./post.module.css";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const { id } = useParams(); 
  const item = product.find((prod) => prod.id === parseInt(id));

  if (!item) return <div> Loading... </div>;
  return (
    <div className={styles.container}>
      <h1>{item.name}</h1>
      <Image className={styles.imge} src={item.image} alt={item.name} />
      <div className={styles.display}>
        <p className={styles.container}>Price :  {item.price}  EGY</p>
        <i class="fa-solid fa-money-bill-1-wave"></i>
      </div>
      <div className={styles.display}>
        <p>{item.description}</p>
        <i className="fa-solid fa-memory"></i>
      </div>
      <div className={styles.display}>
        <p>{item.description2}</p>
        <i className="fa-solid fa-battery-three-quarters"></i>
      </div>
      <div className={styles.display}>
        <p>{item.description3}</p>
        <i class="fa-solid fa-camera"></i>
      </div>
      <p>{item.granta}</p>
      <button className={styles.button} onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default ProductDetails;
