import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useCart } from "./cartContext";

function Mycart() {
  const { cart, removeFromCart, incrementProductCount, decrementProductCount } =
    useCart();
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className=" w-[60%] m-auto h-auto pt-[81px]">
        <h1 className=" py-5 font-bold bg-slate-800 text-white">My Cart</h1>
        <div className="flex flex-col gap-2 mx-16 my-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-2 border-blue-500 py-5 px-5"
            >
              <img className=" w-20" src={product.image}></img>
              <h3 className=" text-xl">{product.name}</h3>
              <h2 className="text-xl">
                ${product.count * product.discounted_price}
              </h2>
              <div className="flex items-center">
                <button
                  onClick={() => decrementProductCount(product.id)}
                  className="text-blue-500"
                >
                  -
                </button>
                <p>{product.count}</p>
                <button
                  onClick={() => incrementProductCount(product.id)}
                  className="text-blue-500"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 hover:bg-slate-900 hover:text-white rounded-xl px-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Mycart;
