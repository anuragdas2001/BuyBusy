import React from "react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { SearchBox } from "./components/SearchBox";
import { Items } from "./components/Items";
import { FallBackUI } from "./components/FallBackUI/FallBackUI";
import { MyOrders } from "./components/My Orders/MyOrders";
import { Cart } from "./components/Cart/Cart";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const date = new Date().toString().slice(0,24);
    console.log(new Date())
  const [orders,setOrders] = useState([{title:"dummy",price:"1",qty:"1",totalPrice:"1",date:date}]);
  console.log(orders);
  const [cart,setCart]= useState(0);
  const handleCart =  () =>{
    console.log("Inside handle Cart !");
    setCart(cart+1);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar cart={cart}/>
          <SearchBox />
          <Items handleCart={handleCart}/>
        </>
      ),
    },
    {
      path: "/orders",
      element: <MyOrders orders={orders}/>,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "*",
      element: <FallBackUI />,
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
