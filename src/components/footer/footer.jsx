import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="ltn__footer-area">

        {/* Footer Top */}
        <div className="footer-top-area section-bg-2 plr--5">
          <Container fluid>
            <Row>

              {/* Column 1 — About */}
              <Col xs={12} sm={6} lg={4}>
                <div className="footer-widget footer-about-widget">

                  <div className="footer-logo">
                    <div className="site-logo">
                      <img
                        src="/img/logo-2.jpeg"
                        alt="Viyad Bliss Logo"
                        className="LogoAlter mb-3"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>

                  <p>
                    A serene 57-plot gated community near Dapoli where modern
                    living meets the peaceful soul of Konkan.
                  </p>

                  <div className="footer-address">
                    <ul>

                      <li>
                        <div className="footer-address-icon">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            Viyad Bliss, Dapoli Coastal Road,
                            Taluka – Dapoli, District – Ratnagiri,
                            Maharashtra, India
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="footer-address-icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="tel:+919876543210">
                              +91 98765 43210
                            </Link>
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="footer-address-icon">
                          <FaEnvelope />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="mailto:info@viyadbliss.com">
                              info@viyadbliss.com
                            </Link>
                          </p>
                        </div>
                      </li>

                    </ul>
                  </div>

                  <div className="ltn__social-media mt-20">
                    <ul>
                      <li><Link href="#"><FaFacebookF /></Link></li>
                      <li><Link href="#"><FaTwitter /></Link></li>
                      <li><Link href="#"><FaLinkedin /></Link></li>
                      <li><Link href="#"><FaYoutube /></Link></li>
                    </ul>
                  </div>

                </div>
              </Col>

              {/* Column 2 — Company */}
              <Col xs={12} sm={6} lg={2}>
                <div className="footer-widget footer-menu-widget">
                  <h4 className="footer-title">Company</h4>
                  <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>
              </Col>

              {/* Column 3 — Project */}
              <Col xs={12} sm={6} lg={2}>
                <div className="footer-widget footer-menu-widget">
                  <h4 className="footer-title">Project</h4>
                  <ul>
                    <li><Link href="/plots">Available Plots</Link></li>
                    <li><Link href="/amenities">Amenities</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/location">Location</Link></li>
                  </ul>
                </div>
              </Col>

              {/* Column 4 — Lifestyle */}
              <Col xs={12} sm={6} lg={2}>
                <div className="footer-widget footer-menu-widget">
                  <h4 className="footer-title">Lifestyle</h4>
                  <ul>
                    <li><Link href="#">Konkan Living</Link></li>
                    <li><Link href="#">Nature & Wellness</Link></li>
                    <li><Link href="#">Second Home</Link></li>
                    <li><Link href="#">Investment</Link></li>
                  </ul>
                </div>
              </Col>

              {/* Column 5 — Legal */}
              <Col xs={12} sm={6} lg={2}>
                <div className="footer-widget footer-menu-widget">
                  <h4 className="footer-title">Legal</h4>
                  <ul>
                    <li><Link href="#">Terms & Conditions</Link></li>
                    <li><Link href="#">Privacy Policy</Link></li>
                    <li><Link href="#">Disclaimer</Link></li>
                    <li><Link href="#">Refund Policy</Link></li>
                  </ul>
                </div>
              </Col>

            </Row>
          </Container>
        </div>

       {/* Copyright */}
        <div className="ltn__copyright-area ltn__copyright-2 section-bg-7 plr--5">
          <Container fluid className="ltn__border-top-2">
            <div className="text-center">

              <p className="mb-0">
                © {new Date().getFullYear()} Viyad Bliss. All Rights Reserved |
                <Link href="#" className="ms-2">Terms</Link> |
                <Link href="#" className="ms-2">Privacy</Link> |
                <Link href="#" className="ms-2">Claim</Link>
              </p>

            </div>
          </Container>
        </div> 
 
      </footer>
    </>
  );
};

export default Footer;