import React from "react";
import { Link } from "react-router-dom";
import products from "./products";
import { useCart } from "./cartContext";
import Navbar from "./navbar";

function Card() {
  const { addToCart } = useCart();
  const renderData = products.map((product) => {
    return (
      <div>
        <div
          key={product.id}
          className="shadow-[0_0_10px_3px] shadow-slate-400 w-80 lg:w-64 lg:h-[450px] h-[500px] bg-slate-300 mx-7 my-8"
        >
          <Link to={`/products/${product.id}`}>
            <img className=" w-80 md:w-64 h-auto" src={product.image}></img>
            <h1 className=" text-2xl font-bold pt-2">{product.name}</h1>
            <p className=" text-sm pt-3 pb-2 px-3 text-left">{product.des}</p>
            <div className=" px-3 flex flex-col">
              <span className="text-xl font-semibold">
                ${product.discounted_price}
                <span className="text-sm text-red-600 font-medium">-50%</span>
              </span>
              <p className=" text-sm">
                List Price :{" "}
                <span className=" line-through">${product.list_price}</span>
              </p>
            </div>
          </Link>
          <button
            onClick={() => addToCart(product)}
            className=" relative lg:bottom-60 lg:left-10 bottom-56 left-[75px] font-semibold text-xl rounded-lg text-slate-400 hover:bg-slate-500 hover:text-black bg-transparent border-[1px] border-slate-100 px-8 py-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div>{/* <Navbar /> */}</div>
      <div className=" flex flex-wrap justify-center">{renderData}</div>
    </div>
  );
}

export default Card;
