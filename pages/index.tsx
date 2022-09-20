import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import { Body, BrandTag, CarouselContainer } from "../styles/Body";

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
          with trendy and stylish designs from all cultural blends.{" "}
        </div>
      </BrandTag>
    </Body>
  );
};

export default Home;
