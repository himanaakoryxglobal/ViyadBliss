import Link from "next/link";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <header className="viyad-header">

      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <img src="/img/logo.png" alt="Viyad Bliss"/>
        </div>

        {/* Navigation */}
        <nav className="nav-menu fw-bold ">
          <Link href="#">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/Services">Services</Link>
          <Link href="/Contact">Contact</Link>
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
          height:150px;        /* fixed navbar height */
          padding:0 25px;     /* remove vertical padding */
          display:flex;
          align-items:center;
          justify-content:space-between;
          border-bottom:3px solid #f59e0b;
        }

        /* Logo */

        .logo img{
          height:200px;
          margin:0;
          padding:0;
          display:flex;
          align-items:center;   /* reduced logo size */
        }

        /* Menu */

        .nav-menu{
          display:flex;
          gap:32px;
          font-size:16px;  /* smaller text */
          font-weight:500;
        }

        .nav-menu a{
          color:#1f2937;
          text-decoration:none;
        }

        /* Icons */

        .nav-icons{
          display:flex;
          gap:12px;
        }

        .icon-btn{
          width:36px;   /* smaller icon box */
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

        /* Mobile */

        @media (max-width:768px){

          .nav-menu{
            display:none;
          }

          .nav-container{
            padding:10px 18px;
          }

          .logo img{
            height:42px;
          }

        }

      `}</style>

    </header>
  );
}