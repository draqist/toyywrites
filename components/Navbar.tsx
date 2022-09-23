import { useState } from "react";
import { Menu, Nav, NavBody } from "../styles/navstyles";
import { navAnimation } from "../utils/animations";
import NavItem from "./NavItem";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  return (
    <Nav>
      <div>
        <h1> DIIJA UNIQUE DESIGNS </h1>
      </div>
      <Menu onClick={() => setNav(!nav)}>
        <div />
        <div />
        <div />
      </Menu>
      {nav ? (
        <NavBody initial="initial" animate="animate" variants={navAnimation} onClick={() => setNav(!nav)}>
          <NavItem />
          <NavItem />
          <NavItem />
          <NavItem />
        </NavBody>
      ) : null}
    </Nav>
  );
};

export default Navbar;
