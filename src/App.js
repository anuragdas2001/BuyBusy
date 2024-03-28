import React, { useEffect } from "react";
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
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { auth } from "./Firebase/firebaseInit";
import { db } from "./Firebase/firebaseInit";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
  redirect,
  NavLink,
  Link,
  useNavigate,

  // Redirect
} from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  const date = new Date().toString().slice(0, 15);
  console.log(new Date());
  const [orders, setOrders] = useState([]);
  const [login, setLogin] = useState(true);
  console.log(login);
  console.log(orders);
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  // const history = useHistory();

  //Retreiving Order Data from the Firestore Database and setting it locally
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "orders"), (snapShot) => {
      // console.log("Current data: ", doc.data());
      const orders = snapShot.docs.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      // console.log(orders);
      setOrders(orders); //locally setting the state
    });
  }, []);

  //sending order details to the firestore database
  const handleOrders = async (orders) => {
    console.log("Inside handleOrders");
    console.log(orders);

    try {
      console.log(orders);
      const docRef = await addDoc(collection(db, "orders"), {
        title: orders.title,
        price: orders.price,
        img: orders.img,
        qty: orders.qty,
        index: orders.index,
        createdOn: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const handleSignUp = (e, email, password) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("FireBase User Created !");
        // setLogin(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const handleSignin = (e, email, password) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("FireBase Authentication Successful");
        setLogin(true);
        console.log(login);
        // navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
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
    console.log(orders);
    const { title, price, img, index } = item;
    console.log(index);

    // const tp = price * qty;
    setOrders([...orders, { ...item }]);
    console.log(orders);
    handleOrders(item);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <FallBackUI />,
      element: (
        <>
          <Navbar cart={cart} login={login} setLogin={setLogin} />
          <SearchBox />
          <Items handleCart={handleCart} />
        </>
      ),
    },
    {
      path: "/signin",
      element: (
        <Login
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSignin={handleSignin}
          login={login}
        />
      ),
    },
    {
      path: "/register",
      element: (
        <Register
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSignUp={handleSignUp}
          login={login}
        />
      ),
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
          handleOrders={handleOrders}
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
