import React from "react";
import ismmart from "../cartImg/footer.jpeg";
import { SocialIcon } from "react-social-icons";

function footer() {
  return (
    <footer className="bg-slate-500 w-full h-auto ">
      <div className="flex flex-wrap lg:px-24 px-8 py-8 justify-center lg:justify-normal gap-10 lg:gap-24">
        <div className="flex flex-col w-[200px]">
          <div>
            <img className=" w-48 h-20 my-4" src={ismmart}></img>
          </div>
          <div className="text-white">
            <p>
              <span className="font-bold">Address :</span> Plot No, 60 Street
              12, G-8/1 G 8/1 G-8, Islamabad, Islamabad Capital Territory 44080
            </p>
            <p className="text-xl font-medium pt-2">(612) 776-9832</p>
          </div>
        </div>
        {/* <div className=" flex flex-wrap gap-40"> */}
        <div className="px-3 text-white">
          <h4 className=" py-2 font-bold ">Company</h4>
          <p>About Us</p>
          <p>Contact US</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>FAQs</p>
        </div>
        <div className="px-3 text-white">
          <h4 className=" py-2 font-bold ">Top Categories</h4>
          <p>Featured</p>
          <p>Latest</p>
          <p>Best Seller</p>
          <p>ISMMART Originals</p>
          <p>Discounts</p>
        </div>
        <div className="px-3 text-white">
          <h4 className=" py-2 font-bold ">Services</h4>
          <p>E-Commerece</p>
          <p>Real Estate</p>
          <p>Energy Sector</p>
          <p>IT & Electronics</p>
          <p>Import & Export</p>
          <p>Automobiles Industry</p>
        </div>
        {/* </div> */}
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full h-[1px] bg-white my-2"></div>
        <div>
          <p className="lg:text-xl text-white text-center">
            All Rights Reserved by &copy; ISMMART GREOUP OF INDUSTRIES.
          </p>
        </div>
        <div className="flex gap-4 my-3">
          <SocialIcon
            url="https://twitter.com/your-twitter-handle"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://www.facebook.com/your-facebook-page"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://www.instagram.com/your-instagram-handle"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/your-linkedin-handle"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://www.youtube.com/your-youtube-handle"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://www.google.com/your-google-handle"
            style={{ height: 30, width: 30 }}
          />
        </div>
      </div>
    </footer>
  );
}

export default footer;
