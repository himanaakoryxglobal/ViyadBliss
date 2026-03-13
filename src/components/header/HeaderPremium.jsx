"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

const HeaderPremium = () => {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <>
      <header className="viyad-header">

        <div
          className={clsx(
            "nav-container",
            scroll > 50 && "sticky-active"
          )}
        >

          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <img src="/img/logo.png" alt="Viyad Bliss" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="nav-menu fw-bold">

            <Link href="/">Home</Link>

            <Link href="/about">About</Link>

            {/* <Link href="/plots">Plots & Homes</Link> */}

            <Link href="/amenities">Amenities</Link>

            <Link href="/lifestyle">Viyad Lifestyle</Link>

            <Link href="/gallery">Gallery</Link>

            <Link href="/location">Location</Link>

            <Link href="/contact">Contact</Link>

          </nav>

          {/* Icons */}
          <div className="nav-icons">

            <div className="icon-btn">
              <FiSearch />
            </div>

            <div className="icon-btn">
              <FiUser />
            </div>

            <div className="icon-btn cart">
              <FiShoppingCart />
              <span className="cart-count">0</span>
            </div>

          </div>

        </div>

      </header>

      <style jsx>{`

        .viyad-header{
          display:flex;
          justify-content:center;
          margin-top:-25px;
        }

        .nav-container{
          width:100%;
          max-width:100%;
          background:#eef2f5;
          border-radius:18px;
          height:150px;
          padding:0 25px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          border-bottom:3px solid #f59e0b;
          transition:all .3s ease;
        }

        .sticky-active{
          position:fixed;
          top:0;
          z-index:999;
          width:100%;
          border-radius:0;
          box-shadow:0 8px 25px rgba(0,0,0,0.1);
        }

        /* Logo */

        .logo img{
          height:200px;
          margin:0;
          padding:0;
        }

        /* Menu */

        .nav-menu{
          display:flex;
          gap:32px;
          font-size:16px;
          font-weight:600;
        }

        .nav-menu a{
          color:#1f2937;
          text-decoration:none;
          transition:.3s;
        }

        .nav-menu a:hover{
          color:#f59e0b;
        }

        /* Icons */

        .nav-icons{
          display:flex;
          gap:12px;
        }

        .icon-btn{
          width:36px;
          height:36px;
          background:#e7ecef;
          border-radius:10px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:18px;
          cursor:pointer;
        }

        .cart{
          position:relative;
        }

        .cart-count{
          position:absolute;
          top:-5px;
          right:-5px;
          background:#f97316;
          color:white;
          font-size:10px;
          padding:2px 6px;
          border-radius:50%;
        }

        /* Tablet */

        @media (max-width:1024px){

          .nav-menu{
            gap:20px;
            font-size:15px;
          }

          .logo img{
            height:150px;
          }

        }

        /* Mobile */

        @media (max-width:768px){

          .nav-container{
            height:90px;
          }

          .logo img{
            height:70px;
          }

          .nav-menu{
            display:none;
          }

        }

      `}</style>

    </>
  );
};

export default HeaderPremium;