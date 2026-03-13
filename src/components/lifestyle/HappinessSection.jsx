"use client";

import Image from "next/image";

export default function HappinessSection() {

  const cards = [
    {
      title: "Lowered Stress",
      text: "The sound of wind through Konkan trees naturally reduces stress levels.",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      title: "Deep Connection",
      text: "Slow living allows real conversations with family and friends.",
      image: "/img/deep-connection.png",
    },
    {
      title: "Purposeful Living",
      text: "Your home supports local education and Konkan village artisans.",
      image: "/img/artisan.png",
    }
  ];

  return (

    <section className="happiness-section">

      <div className="container">

        <h2 className="section-title">
          The Science of Happiness
        </h2>

        <div className="happiness-grid">

          {cards.map((item, i) => (

            <div key={i} className="happiness-card">

              <div className="card-image">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={420}
                  height={520}
                  className="img"
                />

              </div>

              <div className="card-content">

                <div className="icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}