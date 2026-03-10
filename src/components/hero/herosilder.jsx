"use client";

import Slider from "react-slick";
import Image from "next/image";
import { heroSlides } from "@/data/storycard/heroSlides";

export default function HeroSlider() {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true
  };

  return (
    <section className="heroSection">

      <Slider {...settings}>

        {heroSlides.map((slide) => (

          <div key={slide.id} className="slide">

            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="heroImage"
            />

            <div className="overlay"></div>

            <div className="content">
              <h1>{slide.title}</h1>
            </div>

          </div>

        ))}

      </Slider>

      <style jsx>{`

        .heroSection{
          position:relative;
          height:100vh;
          width:100%;
        }

        .slide{
          position:relative;
          height:100vh;
        }

        .heroImage{
          object-fit:cover;
        }

        .overlay{
          position:absolute;
          inset:0;
          background:rgba(0,0,0,0.45);
        }

        .content{
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          text-align:center;
          color:white;
          z-index:2;
        }

        h1{
          font-size:70px;
          font-weight:700;
        }

        :global(.slick-prev),
        :global(.slick-next){
          z-index:5;
        }

      `}</style>

    </section>
  );
}