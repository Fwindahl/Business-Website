import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200, damping: 14 }}
      className={`${styles.flexCenter} select-none  w-[140px] h-[140px] hover:drop-shadow-3xl transition-shadow rounded-full bg-blue-gradient p-[2px] cursor-pointer `}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins mr-[2px] font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            className="w-[23px] h-[23px] object-contain"
            alt="Arrow up"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </motion.div>
  );
};

export default GetStarted;
