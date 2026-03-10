"use client";
import Image from "next/image";

export default function CommitmentSection() {
  return (
    <section className="commitment">

      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Beach"
        fill
        priority
        className="bgImage"
      />

      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="container">

        {/* Left Content */}
        <div className="content">

          <span className="label">Viyad Bliss Promise</span>

          <h2>
            OUR COMMITMENT <br /> TO YOU
          </h2>

          <p className="desc">
            When you choose <strong>Viyad Bliss</strong>, you aren't just buying a plot —
            you are investing in a complete <strong>"Lock & Key"</strong> experience.
            Every step of the journey is designed to give you peace of mind and effortless ownership.
          </p>

          <ul>
            <li>
              <strong>Legal Transparency:</strong> We handle all 7/12 land transfers and government approvals.
            </li>

            <li>
              <strong>Expert Oversight:</strong> Professional structural engineering and construction management.
            </li>

            <li>
              <strong>End-to-End Delivery:</strong> Your only job is to turn the key and enjoy the view.
            </li>
          </ul>

          <button className="cta">
            Explore Viyad Bliss
          </button>

        </div>

        {/* Right Floating Card */}
        <div className="amenitiesCard">

          <h3>Premium Amenities</h3>

          <div className="icon">🏝️</div>

          <p>Ready Infra</p>

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
        }

        .content{
          max-width:620px;
          color:white;
        }

        .label{
          font-size:14px;
          opacity:0.85;
          margin-bottom:10px;
          display:block;
        }

        h2{
          font-size:52px;
          font-weight:700;
          margin-bottom:20px;
          COLOR:#fff;
          line-height:1.15;
          text-shadow:0 6px 20px rgba(0,0,0,0.7);
        }

        .desc{
          font-size:17px;
          line-height:1.7;
          COLOR:#fff;
          margin-bottom:20px;
        }

        ul{
          padding-left:20px;
          margin-bottom:30px;
        }

        li{
          margin-bottom:12px;
          line-height:1.6;
        }

        .cta{
          background:#d97706;
          border:none;
          padding:14px 28px;
          border-radius:8px;
          color:white;
          font-size:16px;
          cursor:pointer;
          transition:0.3s;
        }

        .cta:hover{
          background:#b45309;
        }

        /* Floating Amenities Card */

        .amenitiesCard{
          background:#0f1b2d;
          padding:35px 30px;
          border-radius:16px;
          text-align:center;
          color:white;
          width:220px;
          box-shadow:0 20px 50px rgba(0,0,0,0.45);
        }

        .amenitiesCard h3{
          margin-bottom:15px;
          font-size:20px;
        }

        .icon{
          font-size:28px;
          margin-bottom:10px;
        }

        /* Mobile */

        @media (max-width:900px){

          .commitment{
            height:auto;
            padding:120px 20px;
          }

          .container{
            flex-direction:column;
            text-align:center;
          }

          .amenitiesCard{
            margin-top:40px;
          }

          h2{
            font-size:36px;
          }

        }

      `}</style>

    </section>
  );
}
