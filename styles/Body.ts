import styled from "styled-components";

export const Body = styled.div`
  padding:0 30px;
`

export const BrandTag = styled.div`
  height: 500px; 
  background-color: "";
  width: 100%; 
  margin-top: 40px; 
  font-size:clamp(1rem,4vw,1.285rem); 
  text-align:center;
  display: flex; 
  align-items: center; 
  flex-direction: column;
  .line{
    display: grid;
    grid-template-columns: repeat(3, 1fr) ;
    width: 100%;
    align-items: center;
    div{
      background-color: #00000030;
      height: 1px;
      /* column-span: 2; */
    }
  }
`