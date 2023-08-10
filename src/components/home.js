import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../cartImg/slider/1.jpg";
import img2 from "../cartImg/slider/2.jpg";
import img3 from "../cartImg/slider/3.png";

function home() {
  const images = [
    { url: img1, caption: "Image 1" },
    { url: img2, caption: "Image 2" },
    { url: img3, caption: "Image 3" },
  ];
  return (
    <div className="pt-[81px]">
      <Carousel showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={image.caption} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default home;
