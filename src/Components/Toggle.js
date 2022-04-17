import React, {useState} from "react";
import {motion} from "framer-motion";

const Toggle = ({children, toggleState}) => {
  let togglingAnimation;
  return (
    <motion.div layout className="">
      {toggleState ? children : ""}
    </motion.div>
  );
};

export default Toggle;
