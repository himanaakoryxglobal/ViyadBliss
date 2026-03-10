"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroVideo() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">

      {/* NAVBAR */}

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        <div className="container">

          <div className="logo">
          <img src="/img/logo.png" alt="Viyad Bliss" width={200} height={100}/>
          </div>

          <ul className="menu text-white">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#amenities">Amenities</Link></li>
            <li><Link href="#gallery">Gallery</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>

        </div>

      </nav>

      {/* VIDEO BACKGROUND */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="video"
      >
        <source src="/media/3.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}

      <div className="overlay"></div>

      {/* HERO CONTENT */}

      <div className="content">

        <h1>Viyad Bliss</h1>

        <p>
          Premium Gated Plots in Konkan
        </p>

        <button className="cta">
          Explore Plots
        </button>

      </div>

      <style jsx>{`

      .hero{
        position:relative;
        height:100vh;
        width:100%;
        overflow:hidden;
      }

      /* VIDEO */

      .video{
        position:absolute;
        width:100%;
        height:100%;
        object-fit:cover;
      }

      /* OVERLAY */

      .overlay{
        position:absolute;
        inset:0;
        background:rgba(0,0,0,0.45);
      }

      /* NAVBAR */

      .navbar{
        position:fixed;
        top:0;
        width:100%;
        z-index:20;
        padding:20px 0;
        transition:0.3s;
      }

      .navbar.scrolled{
        background:#0f172a;
        backdrop-filter:blur(10px);
      }

      .container{
        max-width:1200px;
        margin:auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 20px;
      }

      .logo{
        color:white;
        font-size:24px;
        font-weight:700;
      }

      .menu{
        display:flex;
        gap:30px;
        list-style:none;
      }

      .menu a{
        color:white;
        text-decoration:none;
        font-size:16px;
      }

      /* HERO CONTENT */

      .content{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        text-align:center;
        color:white;
        z-index:10;
      }

      h1{
        font-size:70px;
        margin-bottom:20px;
      }

      p{
        font-size:20px;
        margin-bottom:30px;
      }

      .cta{
        background:#ff6a00;
        border:none;
        padding:14px 32px;
        border-radius:8px;
        color:white;
        font-size:16px;
        cursor:pointer;
      }

      `}</style>

    </section>
  );
}