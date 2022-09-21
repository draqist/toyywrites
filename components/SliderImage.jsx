import { useEffect, useRef } from "react";
import { ImageContainer } from "../styles/Body";

const SliderImage = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    // new hoverEffect({
    //   parent: document.querySelector("image"),
    //   intensity: 0.3,
    //   image1: "/image/Abaya1.jpeg",
    //   image2: "/image/joecalih.jpg",
    //   displacementImage: "/displacement/10.jpg",
    // });
  }, []);
  return <ImageContainer className="image">{/* <img src="/image/Abaya1.jpeg" alt="image" /> */}</ImageContainer>;
};

export default SliderImage;
