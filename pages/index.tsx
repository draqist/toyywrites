import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import { Body, BrandTag } from "../styles/Body";

const Home: NextPage = () => {
  return (
    <Body>
      <Navbar />

      <div style={{ height: "500px", backgroundColor: "green", width: "100%", marginTop: "30px" }}></div>
      <BrandTag>
        <div className="line">
          <div />
          <h1>FASHION WITH SAUCE </h1>
          <div />
        </div>

        <div style={{ fontSize: "28px", fontFamily: "Tiempos", width: "60%", marginTop: "60px", lineHeight: "2" }}>
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
