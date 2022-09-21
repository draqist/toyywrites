import { useState } from "react";
import { Menu, MenuNav, Nav } from "../styles/navstyles";

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
      {nav ? <MenuNav onClick={() => setNav(!nav)} /> : null}
    </Nav>
  );
};

export default Navbar;
