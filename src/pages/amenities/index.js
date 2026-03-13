"use client";

import AmenitiesHero from "@/components/aminities/AmenitiesHero";
import { LayoutFive } from "@/layouts";
import AmenitiesSec from "@/components/aminities/AmenitiesSec";
import { amenitiesSections } from "@/data/aminities/amenitiesData";
export default function AmenitiesSection() {

  return (

    <LayoutFive topbar={true}>

    <AmenitiesHero/>

    <AmenitiesSec/>

    {/* <section className="amenities-section">

      <div className="container">

        <h1 className="title">
          Exceptional Amenities at Viyad Bliss
        </h1>

        <p className="intro">
          At Viyad Bliss, we believe modern comfort should never come at the
          cost of natural peace. Our amenities enhance your lifestyle while
          respecting the ecosystem of the Konkan.
        </p>

        <div className="grid">

          {amenitiesSections.map((section, index) => (

            <div key={index} className="card">

              <h3>{section.title}</h3>

              <p className="desc">
                {section.description}
              </p>

              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </div>

          ))}

        </div>

      </div>

      <style jsx>{`

        .amenities-section{
          padding:120px 0;
          background:#f5f7fa;
        }

        .container{
          max-width:1200px;
          margin:auto;
          padding:0 20px;
        }

        .title{
          text-align:center;
          font-size:40px;
          margin-bottom:15px;
        }

        .intro{
          text-align:center;
          max-width:760px;
          margin:auto;
          margin-bottom:70px;
          line-height:1.7;
          color:#555;
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:40px;
        }

        .card{
          background:white;
          padding:40px;
          border-radius:14px;
          box-shadow:0 10px 30px rgba(0,0,0,0.08);
          transition:all .3s ease;
        }

        .card:hover{
          transform:translateY(-8px);
          box-shadow:0 20px 45px rgba(0,0,0,0.15);
        }

        h3{
          font-size:24px;
          margin-bottom:12px;
        }

        .desc{
          margin-bottom:20px;
          color:#666;
        }

        ul{
          padding-left:18px;
        }

        li{
          margin-bottom:8px;
          line-height:1.6;
        }

        @media(max-width:900px){

          .grid{
            grid-template-columns:1fr;
          }

          .title{
            font-size:32px;
          }

        }

      `}</style>

    </section> */} 

    
  </LayoutFive>

  );
}