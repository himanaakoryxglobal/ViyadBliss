import { Container, Row, Col } from "react-bootstrap";
import { FaHome, FaShieldAlt, FaBolt } from "react-icons/fa";
import { MdPool, MdConstruction } from "react-icons/md";
import { GiGate, GiVillage, GiBinoculars } from "react-icons/gi";

export default function AmenitiesSection() {

const amenities = [
{ title: "2 & 3 BHK Furnished", icon: <FaHome /> },
{ title: "Semi-Furnished Bungalows", icon: <GiVillage /> },
{ title: "Ready Infrastructure", icon: <MdConstruction /> },
{ title: "24/7 Security", icon: <FaShieldAlt /> },
{ title: "Gated Community", icon: <GiGate /> },
{ title: "365 Days Water & Power", icon: <FaBolt /> },
{ title: "Swimming Pool", icon: <MdPool /> },
{ title: "Bird View Machan", icon: <GiBinoculars /> }
];

return ( 
<section className="viyad-amenities bg-dark pt-120 pb-90">

  <Container>

    <div className="text-center mb-70">
      <span className="amenity-sub">Our Amenities</span>
      <h2 className="amenity-title">Building Amenities</h2>
    </div>

    <Row>

      {amenities.map((item, index) => (
        <Col lg={3} md={6} key={index}>

          <div className="viyad-card">

            <div className="viyad-icon">
              {item.icon}
            </div>

            <h4>{item.title}</h4>

            <div className="viyad-arrow">
              →
            </div>

          </div>

        </Col>
      ))}

    </Row>

  </Container>

</section>

);
}
