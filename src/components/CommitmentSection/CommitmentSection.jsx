"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
  commitmentImages,
  commitmentContent
} from "@/data/commitment/commitmentData";

export default function CommitmentSection() {
  return (
    <section className="commitment">

      {/* Background Image */}

      <Image
        src={commitmentContent.background}
        alt="Viyad Bliss Background"
        fill
        priority
        className="bgImage"
      />

      <div className="overlay"></div>

      <div className="container">

        {/* Left Content */}

        <div className="content">

          <span className="label text-white">
            {commitmentContent.label}
          </span>

          <h2 className="text-white">{commitmentContent.title}</h2>

          <p className="desc text-white">
            {commitmentContent.description}
          </p>

          <ul>
            {commitmentContent.points.map((point, index) => (
              <li key={index}  className="text-white">
                <strong>{point.title}:</strong> {point.text}
              </li>
            ))}
          </ul>

          <button className="cta">
            {commitmentContent.button}
          </button>

        </div>

        {/* Image Slider */}

        <div className="sliderWrapper">

          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3000 }}
            navigation
            loop
            className="imageSlider"
          >
            {commitmentImages.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt="Viyad Bliss"
                  width={420}
                  height={320}
                  className="slideImage"
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>

      <style jsx>{`

        .commitment{
          position:relative;
          height:650px;
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
          background:linear-gradient(
            90deg,
            rgba(0,0,0,0.85) 0%,
            rgba(0,0,0,0.7) 40%,
            rgba(0,0,0,0.35) 65%,
            rgba(0,0,0,0) 100%
          );
          z-index:1;
        }

        .container{
          position:relative;
          z-index:2;
          max-width:1200px;
          width:100%;
          margin:auto;
          padding:0 40px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:60px;
        }

        .content{
          max-width:550px;
          color:white;
        }

        .label{
          font-size:14px;
          opacity:0.85;
          margin-bottom:10px;
          display:block;
        }

        h2{
          font-size:48px;
          font-weight:700;
          margin-bottom:20px;
          line-height:1.2;
        }

        .desc{
          font-size:17px;
          line-height:1.7;
          margin-bottom:20px;
        }

        ul{
          padding-left:20px;
          margin-bottom:30px;
        }

        li{
          margin-bottom:10px;
        }

        .cta{
          background:#d97706;
          border:none;
          padding:14px 28px;
          border-radius:8px;
          color:white;
          font-size:16px;
          cursor:pointer;
        }

        /* Slider */

        .sliderWrapper{
          width:420px;
        }

        .slideImage{
          border-radius:16px;
          object-fit:cover;
        }

        @media (max-width:900px){

          .container{
            flex-direction:column;
            text-align:center;
          }

          .sliderWrapper{
            width:100%;
          }

        }

      `}</style>

    </section>
  );
}