"use client";

import { motion } from "framer-motion";
import HeaderPremium from "@/components/header/HeaderPremium";
import LifestyleHero from "@/components/lifestyle/LifestyleHero";
import Image from "next/image";
import { experiences } from "@/data/lifestyle/lifestyleData";
import Footer from "@/components/footer/footer";
import HappinessSection from "@/components/lifestyle/HappinessSection";
import TestimonialSection from "@/components/lifestyle/TestimonialSection";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Lifestyle() {

  return (
    <>
      <HeaderPremium />

      <main className="lifestyle-page">

        <LifestyleHero />

        {/* Intro */}
        <motion.section
          className="intro-section text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="container">

            <h2>From the Concrete Jungle to the Konkan Coast</h2>

            <p>
              In Mumbai and Pune life is measured in square feet and traffic minutes.
              At Viyad Bliss life slows down, nature surrounds you and every moment
              reconnects you with yourself.
            </p>

          </div>
        </motion.section>


        {/* Experiences */}
        <motion.section
          className="experience-section"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <div className="container">

            <h2 className="dapolikar-title">
              Become the Next <span className="dapolikar-word">Dapolikar</span>
            </h2>

            <motion.div
              className="experience-grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >

              {experiences.map((item, i) => (

                <motion.div
                  key={i}
                  className="experience-card"
                  variants={fadeUp}
                >

                  <div className="image">

                    <Image
                      src={item.image}
                      alt={item.title}
                      width={450}
                      height={280}
                    />

                  </div>

                  <div className="content">

                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>

                  </div>

                </motion.div>

              ))}

            </motion.div>

          </div>

        </motion.section>


        {/* CTA */}
        <motion.section
          className="cta-section text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <div className="container">

            <h2>Your Journey to Bliss Starts Here</h2>

            <p>
              From land documentation to construction, we handle everything.
              Simply arrive, turn the key and enjoy the peace of Dapoli.
            </p>

            <button className="cta-btn">
              Book Site Visit
            </button>

          </div>

        </motion.section>


        {/* Happiness */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <HappinessSection />
        </motion.div>


        {/* Testimonials */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <TestimonialSection />
        </motion.div>

        <Footer />

      </main>
    </>
  );
}