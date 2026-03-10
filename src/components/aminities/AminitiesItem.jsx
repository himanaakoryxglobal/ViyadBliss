import { Container, Row, Col } from "react-bootstrap";
import { FaHome, FaShieldAlt, FaBolt } from "react-icons/fa";
import { MdPool, MdConstruction } from "react-icons/md";
import { GiGate, GiVillage, GiBinoculars } from "react-icons/gi";

const amenities = [
{ id: 1, title: "2 & 3 BHK Furnished", icon: FaHome },
{ id: 2, title: "Semi-Furnished Bungalows", icon: GiVillage },
{ id: 3, title: "Ready Infra", icon: MdConstruction },
{ id: 4, title: "24/7 Security", icon: FaShieldAlt },
{ id: 5, title: "Gated Community", icon: GiGate },
{ id: 6, title: "365 Days Water & Power", icon: FaBolt },
{ id: 7, title: "Swimming Pool", icon: MdPool },
{ id: 8, title: "Bird View Machan", icon: GiBinoculars }
];

export default function AmenitiesSection() {
return ( 
<section className="ltn__category-area ltn__product-gutter pt-115 pb-90"> <Container>
    <Row>
      <Col xs={12}>
        <div className="text-center mb-50">
          <h6 className="section-subtitle-2">Our Amenities</h6>
          <h2 className="section-title">Building Amenities</h2>
        </div>
      </Col>
    </Row>

    <Row className="justify-content-center">
      {amenities.map((item) => {
        const Icon = item.icon;

        return (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <div className="amenity-wrapper">

              <div className="amenity-main-card">

                <span className="category-icon">
                  <Icon size={36} />
                </span>

                <h4>{item.title}</h4>

              </div>

              <div className="amenity-arrow-card">→</div>

            </div>
          </Col>
        );
      })}
    </Row>

  </Container>
</section>
);
}
