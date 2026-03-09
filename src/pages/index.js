import path from "path";
import fs from "fs/promises";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { LayoutFive } from "@/layouts";
import HeroSectionStyleFive from "@/components/hero/styleFive";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import Feature from "@/components/features";
import ZigZagSection from "@/components/zigzag/ZigZagSection";
import VideoBanner from "@/components/banner/videoBanner";
import TitleSection from "@/components/titleSection";
import AminitiesItem from "@/components/aminities/item";
import FeaturedAmenity from "@/components/aminities/FeaturedAmenity";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import BlogItem from "@/components/blog";
import SocialImpactSection from "@/components/SocialImpact/SocialImpactSection";
import SingleImageCard from "@/components/storycard/SingleImageCard";

import aminitiesData from "@/data/aminities/index.json";
import testimonialData from "@/data/testimonial";
import blogData from "@/data/blog";
import featuresData from "@/data/service";

import { getProducts, productSlug } from "@/lib/product";

function HomePage({ Herodata }) {
  const { products } = useSelector((state) => state.product);
  const featureData = getProducts(featuresData, "buying", "featured", 3);
  const [visibleAmenities, setVisibleAmenities] = useState(1);
  /* =========================
     SCROLLBAR SYNC LOGIC
  ========================= */

  const [scrollPercent, setScrollPercent] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewportHeight(window.innerHeight);

      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

        const percent = scrollTop / docHeight;
        setScrollPercent(percent);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const cardTop = 150 + scrollPercent * (viewportHeight - 300);

  /* =========================
     Slick Arrows
  ========================= */

  const SlickArrowLeft = (props) => (
    <button {...props} className="slick-prev slick-arrow">
      <FaArrowLeft />
    </button>
  );

  const SlickArrowRight = (props) => (
    <button {...props} className="slick-next slick-arrow">
      <FaArrowRight />
    </button>
  );

  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <LayoutFive topbar={true}>

      {/* ===== Scrollbar Synced Card ===== */}
      <div
  className="scrollbar-attached-card"
  style={{ top: `${cardTop}px` }}
>
  <h3 className="text-white">Premium Amenities</h3>

  <div className="amenities-grid">
    {aminitiesData.slice(0, visibleAmenities).map((item) => (
      <div key={item.id} className="amenity-item">
        <div className="amenity-icon">
          <i className={item.icon}></i>
        </div>

        <span className="text-light">{item.title}</span>
      </div>
    ))}
  </div>
</div>
      {/* ===== HERO ===== */}
      <HeroSectionStyleFive data={Herodata} />

      {/* ===== ABOUT ===== */}
      <AboutUsStyleOne sectionSpace="pt-120 pb-90" />
      <SingleImageCard />

      {/* ===== SERVICES ===== */}
      <Feature
        classes="section-bg-1"
        servicebtn={true}
        iconTag={false}
        data={featureData}
        headingClasses="section-subtitle-2"
        titleSectionData={{
          sectionClasses: "text-center",
          subTitle: "Our Services",
          title: "Our Main Focus",
        }}
      />

      {/* ===== ZIGZAG ===== */}
      <ZigZagSection
        image="/img/bg/bunglow1.png"
        title="Luxury Hill View Bungalow"
        description="Experience premium architecture blended with peaceful hills."
      />

      <ZigZagSection
        image="/img/bg/bunglow2.png"
        title="Infinity Pool Retreat"
        description="Relax in a private infinity pool with breathtaking sunset views."
        reverse
      />

      <ZigZagSection
        image="/img/bg/bunglow3.png"
        title="Executive Conference Pavilion"
        description="Modern conference facilities for corporate retreats."
      />

      {/* ===== VIDEO ===== */}
      <VideoBanner />

      {/* ===== SOCIAL IMPACT ===== */}
      <SocialImpactSection />

      {/* ===== AMENITIES ===== */}
      <section className="ltn__category-area ltn__product-gutter pt-115 pb-90">
        <Container>
          <Row>
            <Col xs={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Our Amenities",
                  title: "Building Amenities",
                }}
              />
            </Col>
          </Row>

          {/* <Row className="mb-5">
            <Col xs={12}>
              <FeaturedAmenity />
            </Col>
          </Row> */}

          <Row className="justify-content-center">
            {aminitiesData.map((data, key) => (
              <Col key={key} xs={12} sm={6} md={4} lg={3}>
                <AminitiesItem data={data} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        className="ltn__testimonial-area bg-image-top pt-115 pb-70"
        style={{ backgroundImage: `url("../img/bg/20.jpg")` }}
      >
        <Container>
          <Slider {...testimonialSettings}>
            {testimonialData.map((data, key) => (
              <TestimonialCarouselItem key={key} data={data} />
            ))}
          </Slider>
        </Container>
      </section>

      {/* ===== BLOG ===== */}
      <section className="ltn__blog-area pb-70">
        <Container>
          <Slider {...blogSettings}>
            {blogData.map((data, key) => (
              <BlogItem
                key={key}
                baseUrl="blog"
                data={data}
                slug={productSlug(data.title)}
              />
            ))}
          </Slider>
        </Container>
      </section>

    </LayoutFive>
  );
}

/* ================= STATIC PROPS ================= */

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/data/hero/", "index.json");
  const Herodata = JSON.parse(await fs.readFile(filePath));

  return {
    props: { Herodata },
  };
}

export default HomePage;  