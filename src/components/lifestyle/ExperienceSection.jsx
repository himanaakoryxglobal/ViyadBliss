import Image from "next/image";

export default function ExperienceSection({ experiences }) {

  return (
    <section className="experience-section">

      <div className="container">

        <h2>Become the Next Dapolikar</h2>

        <div className="experience-grid">

          {experiences.map((item, i) => (

            <div key={i} className="experience-card">

              <Image
                src={item.image}
                alt={item.title}
                width={450}
                height={280}
              />

              <div className="content">

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}