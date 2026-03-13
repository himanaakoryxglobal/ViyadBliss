"use client";

import Image from "next/image";

export default function LifestyleSection({ title, text, items }) {

  return (

    <section className="lifestyle-section">

      <div className="container">

        {/* Title */}
        {title && (
          <h2 className="section-title">
            {title}
          </h2>
        )}

        {/* Intro Text */}
        {text && (
          <p className="section-intro">
            {text}
          </p>
        )}

        {/* Cards */}
        {items && (

          <div className="feature-grid">

            {items.map((item, i) => (

              <div key={i} className="feature-card">

                {/* Image */}
                {item.image && (

                  <div className="card-image">

                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={260}
                      className="img"
                    />

                  </div>

                )}

                <div className="card-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

      <style jsx>{`

        .lifestyle-section{
          padding:110px 20px;
          background:#fff;
        }

        .container{
          max-width:1200px;
          margin:auto;
        }

        .section-title{
          text-align:center;
          font-size:40px;
          font-weight:700;
          margin-bottom:20px;
          color:#0f2a3c;
        }

        .section-intro{
          text-align:center;
          max-width:720px;
          margin:auto;
          color:#666;
          line-height:1.7;
          margin-bottom:60px;
        }

        .feature-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:35px;
        }

        .feature-card{
          background:#fff;
          border-radius:16px;
          overflow:hidden;
          box-shadow:0 12px 35px rgba(0,0,0,0.08);
          transition:.35s;
        }

        .feature-card:hover{
          transform:translateY(-8px);
          box-shadow:0 25px 60px rgba(0,0,0,0.15);
        }

        .card-image{
          width:100%;
          height:240px;
          overflow:hidden;
        }

        .img{
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .card-content{
          padding:25px;
          text-align:center;
        }

        .card-content h3{
          font-size:20px;
          margin-bottom:10px;
          color:#0f2a3c;
        }

        .card-content p{
          font-size:15px;
          color:#666;
          line-height:1.6;
        }

        @media(max-width:900px){

          .feature-grid{
            grid-template-columns:1fr;
          }

        }

      `}</style>

    </section>

  );

}