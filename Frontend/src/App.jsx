import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser.jsx";
import { useEffect, useState } from "react";
import Logout from "./components/Logout";
import axios from "axios";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";
import Cart from "./components/Cart.jsx";

function App() {
  const [role, setRole] = useState("");

  const [cartItems, setCartItems] = useState([]);

  // returns true of book is removed, else returns false is book is added
  function handleCartAction(book) {
    let itemRemoved = false;

    // Iterate over existing books
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i] !== book) {
        continue;
      }

      cartItems.splice(i, 1);
      setCartItems(cartItems);

      itemRemoved = true;
      break;
    }

    if (!itemRemoved) {
      cartItems.push(book);
      setCartItems(cartItems);
    }

    console.log(cartItems)
  }

  function clearCart() {
    setCartItems([]);
  }

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/verify")
      .then((res) => {
        if (res.data.login) {
          setRole(res.data.role);
        } else {
          setRole("");
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <BrowserRouter>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books"
          element={
            <Books
              role={role}
              cartItems={cartItems}
              handleCartAction={handleCartAction}
            />
          }
        />
        <Route path="/login" element={<Login setRoleVar={setRole} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/logout" element={<Logout setRole={setRole} />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/book/:id" element={<EditBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} handleCartAction={handleCartAction} clearCart={clearCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
