import React from "react";
import { useRef } from "react";
import { useInView as useInViewFromFramer, motion } from "framer-motion";

function Animations({ disabled, children }) {
  if (disabled) {
    return <>{children}</>;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ["left", "right"];
  const AnimatedChildren = children.map((child, i) => {
    return (
      <SlideInAnimationComp
        key={i}
        direction={directions[i % directions.length]}
      >
        {child}
      </SlideInAnimationComp>
    );
  });
  return <>{AnimatedChildren}</>;
}

function SlideInAnimationComp({ direction = "left", children }) {
  const ref = useRef(null);
  const inView = useInViewFromFramer(ref, {
    once: true,
  });

  const x = { target: "0%", initial: "0%" };

  if (direction === "left") {
    x.initial = "-150%";
  } else {
    x.initial = "150%";
  }

  return (
    <div ref={ref}>
      <motion.section
        initial={{ x: x.initial }}
        animate={{
          x: inView && x.target,
          transitionEnd: {
            x: inView && 0,
          },
        }}
        transition={{ type: "spring", damping: 19 }}
      >
        {children}
      </motion.section>
    </div>
  );
}

const FramerMotions = (props) => (
  <div className="App font-display min-h-screen text-secondary-500 p-8 overflow-hidden">
    <Animations {...props} />
  </div>
);

export default FramerMotions;
