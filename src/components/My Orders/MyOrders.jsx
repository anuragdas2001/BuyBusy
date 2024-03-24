import { useState } from "react";
import styles from "../../styles/MyOrders.module.css";
export const MyOrders = ({ orders,date }) => {
  const { title, price, qty, totalPrice } = orders;
  console.log(date);
  // console.log(qty);
  // console.log({orders});
  // console.log(orders[0].title);
  // console.log(qty);
  console.log(orders[0].date);
  let total = 0;

  return (
    <>
      <h1 className={`${styles.YourOrders}`}>Your Orders</h1>
      <h3>Ordered On:- {date}</h3>
      <>
        {orders.map((order, index) => {
          const tp = order.price * order.qty;
          total += tp;
          order.totalPrice = tp;
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
              <hr />
              <table>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total : {total}</td>
                </tr>
              </table>
              <hr />
            </>
          );
        })}
      </>
    </>
  );
};
