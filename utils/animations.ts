export const navAnimation = {
  initial: { opaccity: 0, y: "-100vh" },
  animate: {
    y: 0, transition: {
      ease: "easeIn",
    },
    opacity: 1
  }
}

export const innerNavAnimation = {
  initial: {},
  animate: {
    transition: {
      duration: 1, ease: "easeIn", delayChildren: .25
    }
  }
}
export const navlist = {
  initial: { y: "-100px" },
  animate: {
    y: 0, transition: {
      duration: .5, ease: "anticipate",
    }
  }
}