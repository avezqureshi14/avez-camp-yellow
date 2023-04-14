import React from "react";
import { motion } from "framer-motion";
import Video from "./Video";
import UploadContent from "./UploadContent";

const Main = () => {
  const containerVariants = {
    initial: {
      opacity: 0,
      x: "-100vw"
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  };

  const contentVariants = {
    initial: {
      opacity: 0,
      x: "-100vw"
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.5
      }
    }
  };

  const videoVariants = {
    initial: {
      opacity: 0,
      x: "100vw"
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.5
      }
    }
  };

  return (
    <>
      <div className="upload_game_main_container">
      <div className="overlay" ></div>
        <motion.div
          className="upload_container"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="content"
            variants={contentVariants}
            initial="initial"
            animate="animate"
          >
            <UploadContent />
          </motion.div>
          <motion.div
            className="video"
            variants={videoVariants}
            initial="initial"
            animate="animate"
          >
            <Video />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Main;
