import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useParams } from "react-router-dom";
import products from "./products";

function SingleProductPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found.</div>;
  }
  return (
    <div>
      <div className=" bg-slate-400 w-full h-20">
        <Navbar />
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-20 m-5 px-5 lg:px-20">
        <div>
          <img className=" h-auto w-[200rem] my-9" src={product.image}></img>
        </div>
        <div>
          <h2 className="text-2xl font-bold py-5">{product.name}</h2>
          <div className="flex flex-wrap lg:gap-20 text-sm items-center">
            <div className=" font-bold text-xl">
              <span className="pr-2">4.0</span>
              <span className=" text-yellow-400">
                &#9733;&#9733;&#9733;&#9733;
              </span>
              <span>&#9733;</span>
            </div>
            <div>
              <span>102 ratings | 30 answered questions</span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-black my-3"></div>
          <div>
            <span className="text-2xl text-red-600 font-medium pr-2">-50%</span>
            <span className="text-2xl font-semibold">
              ${product.discounted_price}
            </span>
            <p className=" text-sm">
              List Price :{" "}
              <span className=" line-through">${product.list_price}</span>
            </p>
          </div>
          <div className="my-3">
            <p className="mb-2">colors:</p>
            <div className="flex flex-wrap">
              <span className="border-2 p-5 mr-2 border-black bg-slate-600"></span>
              <span className="border-2 p-5 mr-2 border-black bg-red-600"></span>
              <span className="border-2 p-5 mr-2 border-black bg-green-600"></span>
              <span className="border-2 p-5 mr-2 border-black bg-purple-600"></span>
              <span className="border-2 p-5 mr-2 border-black bg-indigo-600"></span>
              <span className="border-2 p-5 mr-2 border-black bg-orange-600"></span>
            </div>
          </div>
          <div className="my-10">
            <h4 className="font-bold text-xl mb-2">About this item</h4>
            <p className="text-[17px] opacity-75 text-justify">
              {product.detail_des}
            </p>
            <button className=" my-4 font-semibold text-xl rounded-lg text-slate-700 hover:bg-slate-500 hover:text-black bg-transparent border-[1px] border-slate-100 px-8 py-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-slate-500 w-full h-auto">
        <Footer />
      </div>
    </div>
  );
}

export default SingleProductPage;
