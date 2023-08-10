import React from "react";
import MyCard from "./card";
import Navbar from "./navbar";
import Footer from "./footer";
import Home from "./home";

function dashboard() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div className="" id="products">
        <div className="flex flex-col items-center">
          <h3 className="text-slate-700 text-4xl font-bold pt-6 uppercase">
            Products
          </h3>
          <div className="border-b-2 h-2 w-28"></div>
        </div>
        <div>
          <MyCard />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default dashboard;
