"use client";

import Image from "next/image";
import Slider from "react-slick";

import { heroSlides } from "@/data/storycard/heroSlides";

export default function ViyadHero() {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true
  };

  return (
    <section className="hero">

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

              <span className="subtitle">{slide.subtitle}</span>

              <h1>{slide.title}</h1>

              <p>{slide.description}</p>

              <div className="buttons">

                <a href={slide.primaryBtn.link} className="primaryBtn">
                  {slide.primaryBtn.text}
                </a>

                <a href={slide.secondaryBtn.link} className="secondaryBtn">
                  {slide.secondaryBtn.text}
                </a>

              </div>

            </div>

          </div>

        ))}

      </Slider>

      {/* Scroll Indicator */}

      <div className="scrollIndicator">
        <span></span>
      </div>

      <style jsx>{`

        .hero{
          position:relative;
          width:100%;
          height:100vh;
          overflow:hidden;
        }

        .slide{
          position:relative;
          width:100%;
          height:100vh;
        }

        .heroImage{
          object-fit:cover;
        }

        .overlay{
          position:absolute;
          inset:0;
          background:linear-gradient(
            120deg,
            rgba(0,0,0,0.75),
            rgba(0,0,0,0.35)
          );
        }

        .content{
          position:absolute;
          top:50%;
          left:8%;
          transform:translateY(-50%);
          color:white;
          max-width:600px;
          z-index:2;
          animation:fadeUp 1.2s ease;
        }

        .subtitle{
          letter-spacing:3px;
          font-size:14px;
          text-transform:uppercase;
          opacity:0.8;
        }

        h1{
          font-size:80px;
          font-weight:700;
          margin-top:10px;
        }

        p{
          margin-top:20px;
          font-size:17px;
          line-height:1.7;
        }

        .buttons{
          margin-top:35px;
        }

        .primaryBtn{
          background:#d97706;
          padding:14px 30px;
          border-radius:8px;
          margin-right:15px;
          color:white;
          font-weight:500;
        }

        .secondaryBtn{
          border:1px solid white;
          padding:14px 30px;
          border-radius:8px;
          color:white;
        }

        .scrollIndicator{
          position:absolute;
          bottom:40px;
          left:50%;
          transform:translateX(-50%);
          z-index:3;
        }

        .scrollIndicator span{
          width:2px;
          height:40px;
          background:white;
          display:block;
          animation:scroll 2s infinite;
        }

        @keyframes scroll{
          0%{opacity:0; transform:translateY(-10px);}
          50%{opacity:1;}
          100%{opacity:0; transform:translateY(10px);}
        }

        @keyframes fadeUp{
          from{opacity:0; transform:translateY(40px);}
          to{opacity:1; transform:translateY(0);}
        }

        @media(max-width:768px){

          h1{
            font-size:46px;
          }

          .content{
            left:5%;
            right:5%;
          }

        }

      `}</style>

    </section>
  );
}