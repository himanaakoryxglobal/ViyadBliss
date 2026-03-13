"use client";

import Image from "next/image";

export default function AmenitiesHero() {

  return (

    <section className="amenities-hero">

      {/* Background */}

      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Viyad Bliss Amenities"
        fill
        priority
        className="hero-bg"
      />

      <div className="overlay"></div>

      <div className="hero-content">

        <h1>Exceptional Amenities</h1>

        <p>
          Experience comfort, security, and nature together at Viyad Bliss.
          Thoughtfully curated amenities designed for a peaceful Konkan lifestyle.
        </p>

      </div>


      <style jsx>{`

        .amenities-hero{
          position:relative;
          height:620px;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
        }

        .hero-bg{
          object-fit:cover;
          z-index:0;
        }

        .overlay{
          position:absolute;
          inset:0;

          background:linear-gradient(
            90deg,
            rgba(15,42,60,0.85),
            rgba(15,42,60,0.55),
            rgba(15,42,60,0.2)
          );

          z-index:1;
        }

        .hero-content{
          position:relative;
          z-index:2;
          text-align:center;
          max-width:800px;
          padding:0 20px;
          color:white;
        }

        h1{
          font-size:56px;
          font-weight:700;
          margin-bottom:15px;
        }

        p{
          font-size:18px;
          line-height:1.7;
          opacity:.95;
        }

        @media(max-width:768px){

          .amenities-hero{
            height:320px;
          }

          h1{
            font-size:34px;
          }

        }

      `}</style>

    </section>

  );

}