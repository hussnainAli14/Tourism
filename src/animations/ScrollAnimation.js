import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ScrollAnimation = ({ children, variant, duration }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={variant}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;
