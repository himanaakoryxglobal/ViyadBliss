import styles from "./KonkanStartPack.module.scss";
import { FaHome, FaTools, FaLeaf } from "react-icons/fa";

export default function KonkanStartPack() {

  const packFeatures = [
    {
      icon: <FaHome />,
      title: "What it is",
      description:
        "A collection of pocket-friendly 1BHK & 2BHK bungalow designs crafted to blend naturally with the Konkan landscape while offering modern comfort."
    },
    {
      icon: <FaTools />,
      title: "Why it works",
      description:
        "These homes are engineered for easy maintenance, ensuring that even when you're away, your retreat stays secure and elegant."
    },
    {
      icon: <FaLeaf />,
      title: "The Benefit",
      description:
        "A seamless transition from a city apartment to a peaceful nature retreat, backed by trusted construction and quality assurance."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>

        <div className={styles.header}>
          <h2 className={styles.title}>
            Launching: <span>Konkan Living Start Pack</span>
          </h2>

          <p className={styles.subtitle}>
            We understand that when you choose a place like <strong>Viyad Bliss</strong>,
            you want to start enjoying the Konkan lifestyle as soon as possible.
            That’s why we created the <strong>Konkan Living Start Pack</strong> —
            a thoughtfully curated solution for our early residents.
          </p>
        </div>

        <div className={styles.grid}>
          {packFeatures.map((feature, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.icon}>{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}