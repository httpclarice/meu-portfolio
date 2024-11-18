import { Variants } from "framer-motion";

export const animatePage: Variants = {
  hidden: {
    x: -2000,
  },
  visible: {
    x: 0,
    transition: { type: "spring", duration: 1, bounce: 0.34 },
  },
  leave: {
    x: 2000,
    transition: { type: "tween", ease: "easeOut", duration: 0.4 },
  },
};
