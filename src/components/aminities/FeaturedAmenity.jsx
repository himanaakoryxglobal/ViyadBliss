"use client";

import { motion } from "framer-motion";

const FeaturedAmenity = () => {
  return (
    <motion.div
      className="featured-amenity-card text-center"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Premium Lifestyle Amenities</h2>
      <p>
        Discover thoughtfully designed amenities crafted to enhance your
        everyday living with comfort, elegance, and security.
      </p>
    </motion.div>
  );
};

export default FeaturedAmenity;