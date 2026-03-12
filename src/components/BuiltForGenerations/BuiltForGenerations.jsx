"use client";

import Image from "next/image";

export default function BuiltForGenerations() {
  return (
    <section className="generationSection">

      <div className="container">

        <h2 className="title">BUILT FOR GENERATIONS</h2>

        <p className="description">
         Spread across 14 acres near Kolthare Beach, Dapoli, Viyad Bliss is an upcoming premium gated community villa resort 
         designed to celebrate the serene beauty of Konkan. The project offers thoughtfully planned sea-view plots and villas 
         inspired by the timeless wada architecture. Built using authentic Kaula tiles and climate-responsive design, Viyad Bliss 
         blends traditional craftsmanship with modern comfort while respecting the natural landscape. Developed with the expertise 
         of local artisans who understand this land deeply, Viyad Bliss is more than just a destination — it is a place to live 
         peacefully, create lasting memories, and build a legacy for generations to come. ✨🌿🌊        </p>

        <div className="grid">

          {/* Image 1 */}
          <div className="card">
            <Image
              src="/images/water-temple.jpg"
              alt="Temple Water"
              fill
              className="img"
            />
          </div>

          {/* Image 2 */}
          <div className="card">
            <Image
              src="/images/beach-view.jpg"
              alt="Beach View"
              fill
              className="img"
            />
          </div>

          {/* Image 3 */}
          <div className="card cardHighlight">

            <Image
              src="/images/dolphin.jpg"
              alt="Dolphin"
              fill
              className="img"
            />

            <div className="infoBox">
              <h3>Dolphin Safari</h3>
              <p>
                Set sail early morning and spot playful dolphins dancing
                along the Konkan waves, best enjoyed between Mar and Oct.
              </p>
            </div>

          </div>

        </div>

      </div>

      <style jsx>{`

      .generationSection{
        padding:100px 20px;
        background:#f7f7f7;
      }

      .container{
        max-width:1200px;
        margin:auto;
        text-align:center;
      }

      .title{
        font-size:48px;
        letter-spacing:4px;
        color:#b6864c;
        margin-bottom:20px;
      }

      .description{
        max-width:900px;
        margin:auto;
        font-size:18px;
        line-height:1.7;
        color:#555;
        margin-bottom:70px;
      }

      .grid{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:40px;
      }

      .card{
        position:relative;
        height:350px;
        border-radius:18px;
        overflow:hidden;
        box-shadow:0 10px 30px rgba(0,0,0,0.1);
      }

      .img{
        object-fit:cover;
      }

      .cardHighlight{
        position:relative;
      }

      .infoBox{
        position:absolute;
        bottom:-40px;
        left:50%;
        transform:translateX(-50%);
        background:white;
        padding:25px;
        border-radius:14px;
        width:80%;
        box-shadow:0 10px 30px rgba(0,0,0,0.2);
      }

      .infoBox h3{
        font-size:20px;
        margin-bottom:8px;
      }

      .infoBox p{
        font-size:14px;
        color:#666;
      }

      @media(max-width:900px){

        .grid{
          grid-template-columns:1fr;
        }

        .card{
          height:300px;
        }

      }

      `}</style>

    </section>
  );
}