"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ads = [
  "/img/storycard-03.jpg",
  "/img/storycard-04.jpg",
  "/img/storycard-05.jpg",
  "/img/storycard-03.jpg"
];

export default function BillboardScene() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ads.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scene">

      {/* BILLBOARD IMAGE */}
      <div className="billboard">
        <Image
          src="/img/2359035.png"
          alt="billboard"
          className="billoarmock"
          fill
          style={{ objectFit: "fit" }}
        />

        {/* AD AREA */}
        <div className="ad-area">
          <Image
            src={ads[current]}
            alt="ad"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* ROAD */}
      <div className="road">
        <div className="road-lines"></div>
      </div>

      {/* CAR 1 */}
      <motion.img
        src="/img/car1.png"
        className="car car1"
        animate={{ x: ["-220px", "-10vw"] }}
        transition={{
          repeat:8,
          duration:2,
          ease: "linear"
        }}
      />

      {/* CAR 2 */}
      {/* <motion.img
        src="/img/car2.png"
        className="car car2"
        animate={{ x: ["-300px", "80vw"] }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear"
        }}
      /> */}

    </div>
  );
}
