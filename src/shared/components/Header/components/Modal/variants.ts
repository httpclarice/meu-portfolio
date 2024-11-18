import { Variants } from "framer-motion";

export const variantsModal: Variants = {
  hidden: {
    y: -1100,
  },
  visible: {
    y: 0,
    transition: { duration: 0.4, type: "tween" },
  },
  leave: {
    y: -1200,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
