import Link from "next/link";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Header() {
return (

<header className="viyad-header">

  <div className="nav-container">

    {/* Logo */}
    <div className="logo">
      <img src="/img/logo.png" alt="Viyad Bliss" />
    </div>

    {/* Navigation */}
    <nav className="nav-menu">
      <Link href="#">Home</Link>
      <Link href="#">About</Link>
      <Link href="#">Services</Link>
      <Link href="#">Contact</Link>
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

);
}
