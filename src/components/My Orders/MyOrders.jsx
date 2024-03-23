import { useState } from "react";
import styles from "../../styles/MyOrders.module.css";
export const MyOrders = ({ orders }) => {
  // console.log(date);
  const { title, price, qty, totalPrice, date } = orders;
  // console.log(qty);
  // console.log({orders});
  // console.log(orders[0].title);
  // console.log(qty);
  console.log(orders[0].date);
    
  return (
    <>
      <h1 className={`${styles.YourOrders}`}>Your Orders</h1>
      <>
        {orders.map((order, index) => {
          return (
            <>
              <table className={`${styles.orderTable}`}>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={index}>
                    <td>{order.title}</td>
                    <td>{order.price}</td>
                    <td>{order.qty}</td>
                    <td>{order.totalPrice}</td>
                  </tr>
                </tbody>
              </table>
            </>
          );
        })}
      </>
    </>
  );
};
