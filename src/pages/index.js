import path from "path";
import fs from "fs/promises";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

import { LayoutFive } from "@/layouts";
import HeroSectionStyleFive from "@/components/hero/styleFive";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import Feature from "@/components/features";
import ZigZagSection from "@/components/zigzag/ZigZagSection";
import VideoBanner from "@/components/banner/videoBanner";
import TitleSection from "@/components/titleSection";
import AminitiesItem from "@/components/aminities/item";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import BlogItem from "@/components/blog";
import SocialImpactSection from "@/components/SocialImpact/SocialImpactSection";
import SingleImageCard from "@/components/storycard/SingleImageCard";
import KonkanStartPack from "@/components/kokanpacks/KonkanStartPack";
import ImageSlider from "@/components/Offerslider/ImageSlider";
import CommitmentSection from "@/components/CommitmentSection/CommitmentSection";

import aminitiesData from "@/data/aminities/index.js";
import testimonialData from "@/data/testimonial";
import blogData from "@/data/blog";
import featuresData from "@/data/service";

import { getProducts, productSlug } from "@/lib/product";
import AmenitiesSection from "@/components/aminities/AminitiresSection";
import { HeaderPremium } from "@/components/header";
import HeroSlider from "@/components/hero/herosilder";
import HeroVideo from "@/components/hero/HeroVideo";
import ViyadOfferings from "@/components/offerings/ViyadOfferings";
import BuiltForGenerations from "@/components/BuiltForGenerations/BuiltForGenerations";
import BillboardScene from "@/components/Billboard/Bllboard";


/* =========================
   GLOBAL ANIMATION SYSTEM
========================= */

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemAnimation = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};



function HomePage({ Herodata }) {

  const { products } = useSelector((state) => state.product);
  const featureData = getProducts(featuresData, "buying", "featured", 3);

  const [scrollPercent, setScrollPercent] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [currentAmenity, setCurrentAmenity] = useState(0);

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

        const index = Math.floor(percent * aminitiesData.length);

        setCurrentAmenity(index);

      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);

    }

  }, []);

  const cardTop = 150 + scrollPercent * (viewportHeight - 300);


  /* =========================
     SLICK ARROWS
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

    <LayoutFive topbar={false}>

      {/* =========================
         FLOATING AMENITY CARD
      ========================= */}

      <motion.div
        className="scrollbar-attached-card"
        style={{ top: `${cardTop}px` }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >

        <motion.h3 variants={itemAnimation} className="text-white">
          Premium Amenities
        </motion.h3>

        {aminitiesData[currentAmenity] && (

          <motion.div
            className="amenity-item"
            variants={itemAnimation}
          >

            <div className="amenity-icon">
              <i className={aminitiesData[currentAmenity].icon}></i>
            </div>

            <span className="text-light">
              {aminitiesData[currentAmenity].title}
            </span>

          </motion.div>

        )}

      </motion.div>


      {/* =========================
         HERO
      ========================= */}

      <HeroSectionStyleFive data={Herodata} />
      {/* <HeroVideo/> */}
      {/* <HeroSlider/>   */}
      {/* <HeaderPremium/> */}


      {/* =========================
         ABOUT SECTION
      ========================= */}

      <motion.div
        variants={containerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <motion.div variants={itemAnimation}>
          <AboutUsStyleOne sectionSpace="pt-120 pb-90" />
        </motion.div>

      </motion.div>


      <ViyadOfferings/>

     {/* =========================
         KONKAN START PACK
      ========================= */}

      <motion.div
        variants={containerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <motion.div variants={itemAnimation}>
          <KonkanStartPack />
        </motion.div>

      </motion.div>



      {/* =========================
         VIDEO SECTION
      ========================= */}

      <VideoBanner />

{/* =========================
         COMMITMENT SECTION
      ========================= */}

      <motion.div
        variants={containerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <motion.div variants={itemAnimation}>
          <CommitmentSection />
        </motion.div>

      </motion.div>


      <BillboardScene/>



 {/* =========================
         STORY CARD
      ========================= */}

      {/* <motion.div
        variants={containerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <motion.div variants={itemAnimation}>
          <SingleImageCard />
        </motion.div>

      </motion.div>
 */}



  





   

      {/* =========================
         OFFER SLIDER
      ========================= */}

      <motion.div
        variants={containerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <motion.div variants={itemAnimation}>
          <ImageSlider />
        </motion.div>

      </motion.div>






   
 




      {/* =========================
         ZIGZAG SECTIONS
      ========================= */}

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



  



      {/* =========================
         AMENITIES GRID
      ========================= */}

          <AmenitiesSection/>




        
         <BuiltForGenerations/>


      {/* =========================
         SOCIAL IMPACT
      ========================= */}

      {/* <SocialImpactSection />
 */}


      {/* =========================
         TESTIMONIAL
      ========================= */}

      <section
        className="ltn__testimonial-area bg-image-top pt-115 pb-70"
        style={{ backgroundImage: `url("../img/bg/20.jpg")` }}
      >

        <Container>

                  {/* Section Title */}
        <div className="section-title text-center mb-5">
          <h1 className="text-Dark">Our Testimonial</h1>
        </div>

          <Slider {...testimonialSettings}>

            {testimonialData.map((data, key) => (

              <TestimonialCarouselItem key={key} data={data} />

            ))}

          </Slider>

        </Container>

      </section>



      {/* =========================
         BLOG
      ========================= */}

<section className="ltn__blog-area bg-dark py-5">

  <Container>

    {/* Section Title */}
    <div className="section-title text-center mb-5">
      <h1 className="text-white">Our Blog</h1>
    </div>

    {/* Blog Slider */}
    <Slider {...blogSettings} className="blog-slider">

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



/* =========================
   STATIC PROPS
========================= */

export async function getStaticProps() {

  const filePath = path.join(process.cwd(), "src/data/hero/", "index.json");

  const Herodata = JSON.parse(await fs.readFile(filePath));

  return {
    props: { Herodata },
  };

}

export default HomePage;