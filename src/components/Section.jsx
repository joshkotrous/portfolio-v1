import { React, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../assets/section.css";

const Section = (props) => {
  Section.propTypes = {
    backgroundColor: PropTypes.string,
    header: PropTypes.string,
    children: PropTypes.children,
    id: PropTypes.string,
  };
  const { ref, inView } = useInView();
  const headerAnimation = useAnimation();
  const contentAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
      headerAnimation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      });
      contentAnimation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.5 },
      });
    } else {
      headerAnimation.start({
        y: 50,
        opacity: 0,
        transition: { duration: 0.5 },
      });
      contentAnimation.start({
        y: 50,
        opacity: 0,
        transition: { duration: 0.5, delay: 0.5 },
      });
    }
  }, [inView]);
  return (
    <div
      id={props.id}
      className="sectionContainer"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <motion.div ref={ref} animate={headerAnimation}>
        <h2>{props.header}</h2>
      </motion.div>
      <motion.div animate={contentAnimation}>{props.children}</motion.div>
    </div>
  );
};

export default Section;