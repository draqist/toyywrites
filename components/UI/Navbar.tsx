import { motion } from "framer-motion";
import { useState } from "react";
import { navAnimation } from "../../utils/animations";
import styles from "../../styles/components/navbar.module.scss";
import NavItem from "./NavItem";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const { navbar, menu, nav_dropdown } = styles;
  return (
    <div className={navbar}>
      <div>
        <h1> DIIJA UNIQUE DESIGNS </h1>
      </div>
      <button className={menu} onClick={() => setNav(!nav)}>
        <div />
        <div />
        <div />
      </button>
      {nav ? (
        <motion.div
          className={nav_dropdown}
          initial="initial"
          animate="animate"
          variants={navAnimation}
          onClick={() => setNav(!nav)}
        >
          <NavItem />
          <NavItem />
          <NavItem />
          <NavItem />
        </motion.div>
      ) : null}
    </div>
  );
};

export default Navbar;
