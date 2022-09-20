import styled from "styled-components";

export const Nav = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1{
    letter-spacing: -1.5px;
  }
  border-bottom:1px solid #00000030;
`

export const Menu = styled.div`
  width: 60px;
  height: 28px;
  display: flex;
  flex-direction:column; 
  justify-content: space-between;
  div{
    width: 100%;
    height: 1px;
    background-color: black
  }
`