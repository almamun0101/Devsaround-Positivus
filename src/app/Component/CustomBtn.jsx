import React from "react";
import { motion } from "framer-motion";

const CustomBtn = ({ btn }) => {
  return (
    <div>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button className="bg-black hover:bg-white dark:hover:bg-black  dark:hover:text-white hover:border-2 hover:text-black dark:bg-white text-white dark:text-black w-66 h-16 rounded-xl transition-colors">
          {btn}
        </button>
      </motion.button>
    </div>
  );
};

export default CustomBtn;
