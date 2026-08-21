import Gear from "../Svgs/gear.svg";
import { motion } from "motion/react";
export default function Loader() {
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}
      id="gear-loader"
    >
      <Gear />
    </motion.div>
  );
}
