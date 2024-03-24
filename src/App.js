import React from "react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { SearchBox } from "./components/SearchBox";
import { Items } from "./components/Items";
import { FallBackUI } from "./components/FallBackUI/FallBackUI";
import { MyOrders } from "./components/My Orders/MyOrders";
import { Cart } from "./components/Cart/Cart";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { ItemData } from "./Data/ItemData";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const date = new Date().toString().slice(0, 15);
  console.log(new Date());
  const [orders, setOrders] = useState([]);
  const [login, setLogin] = useState(true);
  console.log(login);
  console.log(orders);
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (prod) => {
    console.log(prod);
    console.log(cartItems);
    const { index, title, price, img } = prod;
    console.log(prod.index);
    console.log(cartItems[0].index);
    const id = cartItems.findIndex((item) => item.index == index);
    console.log(id);
    if (id === -1) {
      setCartItems([...cartItems, { ...prod, qty: 1 }]);
    } else {
      cartItems[id].qty++;
      console.log(cartItems[id].qty);
      setCartItems([...cartItems]);
    }
  };
  const handleRemove = (prod) => {
    const { index, title, price, img } = prod;
    console.log(prod.index);
    // console.log(cartItems[0].index);
    const id = cartItems.findIndex((item) => item.index == index);
    console.log(id);
    if (id !== -1) {
      cartItems[id].qty--;
      if (cartItems[id].qty == 0) {
        cartItems.splice(id, 1);
      }
      setCartItems(cartItems);
      setCart(cart - 1);
    }
  };
  const handleCart = ({ name, img, price, id }) => {
    console.log("Inside handle Cart !");
    console.log(name);
    setCart(cart + 1);
    // console.log(cartItems[0].id);
    console.log(id);
    const index = cartItems.findIndex((item) => {
      console.log(item.index);
      return item.index === id;
    });
    console.log(index);
    if (index === -1) {
      setCartItems([
        ...cartItems,
        { title: name, price: price, img: img, qty: 1, index: id },
      ]);
    } else {
      cartItems[index].qty++;
      setCartItems(cartItems);
    }
  };
  const handlePurchase = (item) => {
    console.log("Inside handlePurchase !");
    console.log(item);
    const { title, price, img, index } = item;
    console.log(index);

    // const tp = price * qty;
    setOrders([...orders, { ...item }]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar cart={cart} login={login} setLogin={setLogin} />
          <SearchBox />
          <Items handleCart={handleCart} />
        </>
      ),
      errorElement: <FallBackUI />,
    },
    {
      path: "/signin",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/orders",
      element: <MyOrders orders={orders} date={date} />,
    },
    {
      path: "/cart",
      element: (
        <Cart
          cartItems={cartItems}
          handlePurchase={handlePurchase}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        />
      ),
    },
  ]);

  return (
    <>
      {/* <Navbar />
      <SearchBox />
      <Items /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
