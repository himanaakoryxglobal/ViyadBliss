"use client";

import { FaQuoteLeft } from "react-icons/fa";
import testimonialsData from "@/data/lifestyle/testimonialsData";

export default function TestimonialSection() {

  return (
    <section className="testimonial-section">

      <div className="container">

        <h2 className="section-title">
          What Our Residents Say
        </h2>

        <div className="testimonial-grid">

          {testimonialsData.map((item, i) => (

            <div key={i} className="testimonial-card">

              <FaQuoteLeft className="quote-icon" />

              <p className="testimonial-text">
                {item.quote}
              </p>

              <div className="testimonial-user">

                <div className="avatar">
                  {item.author.charAt(0)}
                </div>

                <span className="author">
                  {item.author}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      <style jsx>{`

        .testimonial-section{
          padding:110px 0;
          background:linear-gradient(180deg,#f8fafc,#eef2f5);
        }

        .container{
          max-width:1200px;
          margin:auto;
          padding:0 20px;
        }

        .section-title{
          text-align:center;
          font-size:40px;
          margin-bottom:60px;
        }

        .testimonial-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:35px;
        }

        .testimonial-card{
          background:white;
          border-radius:16px;
          padding:35px;
          text-align:center;
          box-shadow:0 12px 35px rgba(0,0,0,0.08);
          transition:.3s;
        }

        .testimonial-card:hover{
          transform:translateY(-10px);
          box-shadow:0 20px 50px rgba(0,0,0,0.15);
        }

        .quote-icon{
          font-size:30px;
          color:#f59e0b;
          margin-bottom:15px;
        }

        .testimonial-text{
          font-size:16px;
          line-height:1.7;
          color:#555;
          margin-bottom:25px;
        }

        .testimonial-user{
          display:flex;
          flex-direction:column;
          align-items:center;
        }

        .avatar{
          width:48px;
          height:48px;
          border-radius:50%;
          background:#0f2a3c;
          color:white;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight:600;
          margin-bottom:10px;
        }

        .author{
          font-weight:600;
          color:#333;
        }

        @media(max-width:900px){

          .testimonial-grid{
            grid-template-columns:1fr;
          }

        }

      `}</style>

    </section>
  );
}