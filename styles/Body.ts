import styled from "styled-components";

export const Body = styled.div`
  padding:0 30px;
`
export const CarouselContainer = styled.div`
  height: 500px; 
  background-color: green;
  width: 100%; 
  margin-top: 30px;
`
export const BrandTag = styled.div`
  height: 500px; 
  width: 100%; 
  margin-top: 40px; 
  font-size:clamp(1rem,4vw,1.285rem); 
  text-align:center;
  display: flex; 
  align-items: center; 
  flex-direction: column;
  .brand {
    &_tagline {
      display: grid;
      grid-template-columns: repeat(3, 1fr) ;
      width: 100%;
      align-items: center;
        div{
          background-color: #00000030;
          height: 1px;
        }
    }
    &_brief{
      font-size: 28px; 
      font-family: "Tiempos"; 
      width: 60%;
      margin-top: 60px;
      line-height: 2;
      h3 {
        /* letter-spacing: 30px; */
        margin-top: 20px;
        font-family: "Bergman";
        transition: .5s all ease-in;
        :hover{
          /* letter-spacing:1px; */
        }
      }
    };
  }
`