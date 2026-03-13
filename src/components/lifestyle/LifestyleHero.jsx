"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LifestyleHero() {

  const images = [
    "https://images.unsplash.com/photo-1593697821022-7d5f4b7dfca7",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    "https://images.unsplash.com/photo-1560785496-3c9d27877182",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="lifestyle-hero text-white">

      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${index === currentImage ? "active" : ""}`}
        >
          <Image
            src={img}
            alt="Konkan Lifestyle"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}

      <div className="hero-overlay">

        <div className="hero-content">

          <h1>The Viyad Lifestyle</h1>

          <p>
            From Konkan farms to the Dapoli coastline,
            discover a peaceful lifestyle surrounded by nature.
          </p>

          <Link href="/contact">
            <button className="hero-btn">
              Book Site Visit
            </button>
          </Link>

        </div>

      </div>

      <style jsx>{`

        .lifestyle-hero{
          position:relative;
          width:100%;
          height:560px;
          overflow:hidden;
        }

        .hero-bg{
          position:absolute;
          inset:0;
          opacity:0;
          transition:opacity 1.5s ease;
        }

        .hero-bg.active{
          opacity:1;
        }

        .hero-overlay{
          position:absolute;
          inset:0;
          background:linear-gradient(
            rgba(0,0,0,0.6),
            rgba(0,0,0,0.4)
          );
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
        }

        .hero-content{
          color:white;
          max-width:720px;
          padding:20px;
        }

        .hero-content h1{
          font-size:52px;
          margin-bottom:15px;
        }

        .hero-content p{
          font-size:18px;
          margin-bottom:30px;
        }

        .hero-btn{
          padding:14px 32px;
          background:#f59e0b;
          border:none;
          border-radius:8px;
          color:white;
          font-weight:600;
          cursor:pointer;
        }

      `}</style>

    </section>
  );
}