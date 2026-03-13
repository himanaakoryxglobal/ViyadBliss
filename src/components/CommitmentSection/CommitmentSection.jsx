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

  const { label, title, description, points, button, background } =
    commitmentContent;

  return (
    <section className="commitment">

      {/* Background Image */}
      <Image
        src={background}
        alt="Viyad Bliss Background"
        fill
        priority
        className="bgImage"
      />

      <div className="overlay" />

      <div className="container">

        {/* LEFT CONTENT */}

        <div className="content">

          <span className="label text-white ">
            {label}
          </span>

          <h2 className="text-white text-centerw">{title}</h2>

          <p className="desc text-white">
            {description}
          </p>

          <ul>
            {points.map((point, index) => (
              <li key={index}>
                <strong>{point.title}:</strong> {point.text}
              </li>
            ))}
          </ul>

          <button className="cta">
            {button.label || button}
          </button>

        </div>


        {/* IMAGE SLIDER */}

        <div className="sliderWrapper">

          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false
            }}
            navigation
            loop
            speed={200}
            className="imageSlider"
          >

            {commitmentImages.map((img, index) => (

              <SwiperSlide key={index}>

                <div className="imageBox">

                  <Image
                    src={img}
                    alt={`Viyad Bliss ${index}`}
                    fill
                    className="slideImage"
                  />

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </div>

      <style jsx>{`

        .commitment{
          position:relative;
          min-height:650px;
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
            rgba(0,0,0,0.65) 40%,
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
          align-items:center;
          justify-content:space-between;

          gap:60px;
        }

        /* LEFT */

        .content{
          max-width:540px;
          color:white;
        }

        .label{
          font-size:14px;
          opacity:.8;
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
          padding-left:18px;
          margin-bottom:30px;
        }

        li{
          margin-bottom:10px;
          line-height:1.6;
        }

        .cta{
          background:#d97706;
          border:none;
          padding:14px 30px;
          border-radius:8px;
          color:white;
          font-size:16px;
          font-weight:600;
          cursor:pointer;
          transition:.3s;
        }

        .cta:hover{
          background:#b45309;
        }

        /* SLIDER */

        .sliderWrapper{
          width:420px;
        }

        .imageBox{
          position:relative;
          width:100%;
          height:620px;
          border-radius:16px;
          overflow:hidden;
        }

        .slideImage{
          object-fit:cover;
        }

        /* MOBILE */

        @media (max-width:900px){

          .container{
            flex-direction:column;
            text-align:center;
            gap:40px;
          }

          h2{
            font-size:36px;
          }

          .sliderWrapper{
            width:100%;
            max-width:420px;
          }

        }

      `}</style>

    </section>
  );
}