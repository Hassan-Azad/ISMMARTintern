import React, { useState } from "react";
import Logo from "../cartImg/Ismmartlogo.png";
import { Link } from "react-router-dom";
import bucket from "../cartImg/bucket.png";
import { useCart } from "./cartContext";

function Navbar() {
  const { cart } = useCart();
  return (
    <navbar className=" fixed z-10 flex justify-between items-center px-6 bg-slate-400 w-full h-20 ">
      <div className="">
        <img className=" w-20" src={Logo}></img>
      </div>
      <ul className="hidden lg:flex text-white text-xl font-semibold ">
        <li className=" mx-9 px-3 py-1 rounded-xl hover:bg-white hover:text-slate-500 cursor-pointer transition duration-500">
          <a href="#home">Home</a>
        </li>
        <Link to="/products">
          <li className=" mx-9 px-3 py-1 rounded-xl hover:bg-white hover:text-slate-500 cursor-pointer transition duration-500">
            <a href="#products">Products</a>
          </li>
        </Link>
        <li className=" mx-9 px-3 py-1 rounded-xl hover:bg-white hover:text-slate-500 cursor-pointer transition duration-500">
          About Us
        </li>
        <li className=" mx-9 px-3 py-1 rounded-xl hover:bg-white hover:text-slate-500 cursor-pointer transition duration-500">
          Contact Us
        </li>
      </ul>

      <Link to="/register">
        <button className=" bg-black text-white text-xl px-3 py-1 rounded-lg hidden lg:block hover:bg-white hover:text-slate-500 transition duration-500">
          Register/SignIn
        </button>
      </Link>
      <div className="flex gap-3 items-center">
        <Link to="/cartPage">
          <div className="flex gap-2 px-4">
            <img className=" w-7" src={bucket}></img>
            <span className=" font-bold text-2xl text-red-500">
              {cart.length}
            </span>
          </div>
        </Link>
        <div className="lg:hidden font-bold text-2xl">
          <a href="#">&#9776;</a>
        </div>
      </div>
    </navbar>
  );
}

export default Navbar;
