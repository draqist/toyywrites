import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import { Body, BrandTag, CarouselContainer, Projects } from "../styles/Body";
import SliderImage from "../components/SliderImage"

const Home: NextPage = () => {
  return (
    <Body>
      <Navbar />
      <CarouselContainer></CarouselContainer>
      <BrandTag>
        <div className="brand_tagline">
          <div />
          <h1>FASHION WITH SAUCE </h1>
          <div />
        </div>
        <div className="brand_brief">
          {" "}
          It all began 15 years ago in the tight crevices of Lagos, Nigeria. The will to make people express themselves
          with the confidence that their attires gave them. Putting smiles on faces and making people the talk of town
          with trendy and stylish designs from all cultural blends.
        </div>
        <div className="brand_svg">
          <div className="brand_link">
            <h3> DISCOVER DIIJA </h3>
          </div>
          <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210.05 95.82" fill="none" stroke="#000000">
              <path
                stroke="#000000"
                d="M33.28,24.27a186.31,186.31,0,0,1,119-11.69c6.43,1.51,13,3.51,17.87,8,6.14,5.65,8.51,14.67,7.25,22.91-1.54,10.09-8,19-16.11,25.16s-17.81,10-27.58,12.91a198.35,198.35,0,0,1-68.8,8c-14.06-.84-28.13-3.21-41.27-8.3C13.53,77.36,3.16,70.73.58,60.21-1.34,52.35,1.69,43.9,6.87,37.69S19.15,27.18,26.35,23.5C57.08,7.78,91.87,1.34,126.37,0"
                pathLength="1"
                strokeDashoffset="0px"
                strokeDasharray="1px 3px"
                data-projection-id="107"
              ></path>
              <path
                className="absolute"
                stroke="#edece7"
                strokeWidth="2"
                d="M33.28,24.27a186.31,186.31,0,0,1,119-11.69c6.43,1.51,13,3.51,17.87,8,6.14,5.65,8.51,14.67,7.25,22.91-1.54,10.09-8,19-16.11,25.16s-17.81,10-27.58,12.91a198.35,198.35,0,0,1-68.8,8c-14.06-.84-28.13-3.21-41.27-8.3C13.53,77.36,3.16,70.73.58,60.21-1.34,52.35,1.69,43.9,6.87,37.69S19.15,27.18,26.35,23.5C57.08,7.78,91.87,1.34,126.37,0"
                pathLength="1"
                strokeDashoffset="0px"
                strokeDasharray="0px 1px"
                data-projection-id="108"
              ></path>
              <path
                className="absolute"
                stroke="#000000"
                strokeWidth="1"
                d="M33.28,24.27a186.31,186.31,0,0,1,119-11.69c6.43,1.51,13,3.51,17.87,8,6.14,5.65,8.51,14.67,7.25,22.91-1.54,10.09-8,19-16.11,25.16s-17.81,10-27.58,12.91a198.35,198.35,0,0,1-68.8,8c-14.06-.84-28.13-3.21-41.27-8.3C13.53,77.36,3.16,70.73.58,60.21-1.34,52.35,1.69,43.9,6.87,37.69S19.15,27.18,26.35,23.5C57.08,7.78,91.87,1.34,126.37,0"
                pathLength="1"
                strokeDashoffset="0px"
                strokeDasharray="0px 1px"
                data-projection-id="109"
              ></path>
            </svg>
          </div>
        </div>
      </BrandTag>
      <Projects>
        <div className="project_tagline">
          <div />
          <h1> YOU IN MANY SHADES </h1>
          <div />
        </div>
        <div className="project_slides">
          <SliderImage />
          {/* <SliderImage />
          <SliderImage /> */}
        </div>
      </Projects>
    </Body>
  );
};

export default Home;
