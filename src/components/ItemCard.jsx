import { useState } from "react";
import styles from "../styles/ItemCard.module.css";
export const ItemCard = ({ name, price, id, img,handleCart }) => {

  return (
    <>
      <div className={`${styles.ItemWrapper}`}>
        <div className={`${styles.ItemName}`}>{name}</div>
        <img className={`${styles.ItemImg}`} src={img} alt="" />
        <div className={`${styles.ItemPrice}`}>&#8377;{price}</div>

        <div className={`${styles.ItemButtonWrapper}`}>
          <button
            onClick={() => {
              handleCart();
            }}
            className={`${styles.cartButton}`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
