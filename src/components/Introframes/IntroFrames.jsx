"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const frames = [
  {
    id: 1,
    title: "WELCOME TO VIYAD BLISS",
    subtitle: "Where Nature Meets Peaceful Living",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1800",
    sideImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
  },
  {
    id: 2,
    title: "Luxury Konkan Living",
    subtitle: "Sea breeze, green hills and peaceful mornings",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800",
  },
  {
    id: 3,
    title: "Not Just a Home",
    subtitle: "A Nature Retreat For Generations",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1800",
  },
  {
    id: 4,
    title: "Experience Viyad Bliss",
    subtitle: "Your Konkan Second Home Awaits",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800",
  },
];

export default function IntroFrames() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % frames.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const frame = frames[index];

  return (
    <section className="introSection">

      {/* Background Image */}

      <Image
        src={frame.image}
        alt="Background"
        fill
        className="bgImage"
      />

      <div className="overlay"></div>

      <div className="container">

        <div className="row align-items-center">

          {/* Text Content */}

          <motion.div
            key={frame.title}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-md-6 text-white"
          >
            <h1 className="fw-bold display-4">{frame.title}</h1>
            <p className="lead">{frame.subtitle}</p>
          </motion.div>

          {/* Side Image */}

          {frame.sideImage && (
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="col-md-6"
            >
              <div className="imageBox">
                <Image
                  src={frame.sideImage}
                  alt="Side"
                  fill
                  className="sideImage"
                />
              </div>
            </motion.div>
          )}

        </div>

      </div>

<style jsx>{`

.introSection{
  position:relative;
  height:100vh;
  display:flex;
  align-items:center;
  overflow:hidden;
}

.bgImage{
  object-fit:cover;
  z-index:0;
}

.overlay{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,0.55);
  z-index:1;
}

.container{
  position:relative;
  z-index:2;
}

.imageBox{
  position:relative;
  width:100%;
  height:350px;
  border-radius:20px;
  overflow:hidden;
}

.sideImage{
  object-fit:cover;
}

`}</style>

    </section>
  );
}