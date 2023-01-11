const svgVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2 } },
};
const pathVariants = {
  initial: { pathLength: 0 },
  whileInView: { pathLength: 1, transition: { duration: 2, ease: "easeIn" } },
};

export {svgVariants, pathVariants}