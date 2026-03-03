"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AminitiesItem = ({ data }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
      className="ltn__category-item ltn__category-item-5 text-center"
    >
      <Link href="/shop">
        <span className="category-icon">
          <i className={`${data.icon}`}></i>
        </span>
        <span className="category-title">{data.title}</span>
        <span className="category-btn">
          <i className="flaticon-right-arrow"></i>
        </span>
      </Link>
    </motion.div>
  );
};

export default AminitiesItem;