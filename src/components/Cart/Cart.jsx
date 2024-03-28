import styles from "../../styles/ItemCard.module.css";

import { ItemCard } from "../ItemCard";
export const Cart = ({cartItems,handlePurchase,handleAdd,handleRemove}) => {
//   console.log(orders)
  console.log(cartItems);
  return (
    <>
      <h1>Cart is empty!</h1>
      <div className={`${styles.wrapper}`}>
        {cartItems.map((item) => (
          <>
            <div className={`${styles.ItemWrapper}`}>
              <div className={`${styles.ItemName}`}>{item.title}</div>
              <img className={`${styles.ItemImg}`} src={item.img} alt="" />
              <div className={`${styles.ItemPrice}`}>&#8377;{item.price}</div>
              <div className={`${styles.ItemButtonWrapper} ms-3`}>
                <button onClick={()=>handleRemove(item)} className="me-4">-</button>
                <button onClick={()=>{handlePurchase(item)}} className={`${styles.cartButton} me-3`}>Purchase</button>
                <span>X{item.qty}</span>
                <button onClick={()=>handleAdd(item)} className="ms-2">+</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
