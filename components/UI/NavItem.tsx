import { motion } from "framer-motion";
import styles from "../../styles/components/navbar.module.scss";

const NavItem = (props: any) => {
  const { menu_nav_dropdown, nav_number, nav_link } = styles;
  return (
    <motion.div className={menu_nav_dropdown}>
      <div className={nav_number}>01</div>
      <div className={nav_link}> HOME </div>
    </motion.div>
  );
};

export default NavItem;
