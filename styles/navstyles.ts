import styled from "styled-components";

export const Nav = styled.div`
  height: 70px;
  width: calc(100vw - 60px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  margin-bottom: 40px;
  z-index: 8;
  background-color: var(--background-color);
  /* box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3) */
  h1{
    letter-spacing: -1.5px;
  }
  border-bottom:1px solid var(--border);
`

export const Menu = styled.button`
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
export const MenuNav = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 4;
  left: 0px;
  height: 100vh;
  background-color: var(--background-color);
`