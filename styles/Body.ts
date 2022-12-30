import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
`;
export const CarouselContainer = styled.div`
  height: 500px;
  background-color: rebeccapurple;
  width: 100%;
  position: relative;
  top: 100px;
`;
export const ContentContainer = styled.div`
  padding: 0 30px;
`;
export const BrandTag = styled.div`
  height: 500px;
  width: 100%;
  margin-top: 150px;
  font-size: clamp(1rem, 4vw, 1.15rem);
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  .brand {
    &_tagline {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      align-items: center;
      div {
        background-color: var(--border);
        height: 1px;
      }
    }
    &_brief {
      font-size: 28px;
      font-family: "Tiempos";
      width: 60%;
      margin-top: 60px;
      line-height: 2;
    }
    &_svg {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      top: 70px;
      cursor: pointer;
      .brand_link {
        text-align: center;
        h3 {
          font-family: "Bergman";
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          transition: 0.5s all ease-in-out;
          line-height: 1.375rem;
        }
      }
      .svg {
        pointer-events: none;
        position: absolute;
        text-align: center;
        cursor: pointer;
        @media (min-width: 1024px) {
          min-width: 280px;
        }
        @media (min-width: 220px) {
          min-width: 220px;
        }
        svg {
          position: relative;
          width: 100%;
          height: auto;
          left: 15px;
          .absolute {
            position: absolute;
          }
        }
      }
    }
  }
`;
export const Projects = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  font-size: clamp(1rem, 4vw, 1.15rem);
  background-color: #000000;
  color: #ffffff80;
  height: 500px;
  .project {
    &_tagline {
      padding: 20px 30px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      align-items: center;
      div {
        background-color: var(--border-light);
        height: 1px;
      }
    }
    &_slides {
      margin: 60px 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 320px;
  height: 560px;
  border-radius: 14px;
  img {
    border-radius: 14px;
    width: 100%;
    height: 100%;
  }
`;
