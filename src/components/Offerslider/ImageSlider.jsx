"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageSlider({ images = [] }) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images.length) return null;

  return (
    <section className="sliderSection">

      <div className="slider">

        <div className="imageWrapper">
          <Image
            src={images[current]}
            alt="Slider Image"
            fill
            className="image"
          />
        </div>

        <button className="prev" onClick={prev}>‹</button>
        <button className="next" onClick={next}>›</button>

      </div>

      <style jsx>{`
        .sliderSection {
          display: flex;
          justify-content: center;
          padding: 80px 20px;
        }

        .slider {
          width: 900px;
          height: 500px;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .imageWrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .image {
          object-fit: cover;
        }

        button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.6);
          border: none;
          color: white;
          font-size: 28px;
          padding: 10px 16px;
          cursor: pointer;
          border-radius: 8px;
        }

        .prev {
          left: 15px;
        }

        .next {
          right: 15px;
        }

        button:hover {
          background: black;
        }
      `}</style>

    </section>
  );
}