"use client";

import Image from "next/image";

const offerings = [
  {
    id: 1,
    title: "Boutique 1BHK Eco-Friendly House",
    desc: "Perfect for the urban minimalist seeking a peaceful escape from the city. These compact homes blend architecture with nature and maximize comfort in a smaller footprint.",
    highlight:
      "Comes with an extra-large garden space on your 3,000+ sq. ft. plot — perfect for a private herb garden or nature sanctuary.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600",
  },
  {
    id: 2,
    title: "2BHK Private Bungalow with Veranda",
    desc: "Experience the authentic Konkan lifestyle with open spaces designed for relaxed afternoons, family gatherings, and slow living.",
    highlight:
      "Features a classic wide Konkan-style veranda — the perfect spot for morning tea while enjoying misty hills or monsoon rain.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600",
  },
  {
    id: 3,
    title: "Design Your Dream Nature Home",
    desc: "For homeowners who want a truly personalized living space, we offer complete customization through our eco-conscious architecture team.",
    highlight:
      "Partner with our architects to design a bespoke bungalow tailored to your lifestyle, layout preferences, and interior choices.",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1600",
  },
];

export default function ViyadOfferings() {
  return (
    <section className="offeringsSection ">

      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1800"
        alt="Konkan Landscape"
        fill
        priority
        className="bgImage"
      />

      <div className="overlay"></div>

      <div className="container">

        <h2 className="title">Our Offerings: From Plot to Key</h2>

        <p className="intro">
          At <strong>Viyad Bliss</strong>, building your second home should feel
          exciting—not overwhelming. From securing your land and handling
          documentation to architecture, design and construction, we manage
          everything so you can focus on enjoying your dream home in nature.
        </p>

        <div className="grid ">

          {offerings.map((item) => (
            <div key={item.id} className="card text-white">

              <div className="imageWrapper">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="image"
                />
              </div>

              <div className="content">

                <h3 className="text-white">{item.title}</h3>

                <p className="text-white">{item.desc}</p>

                <div className="highlight">
                  <strong>Highlight:</strong> {item.highlight}
                </div>

              </div>

            </div>
          ))}

        </div>  


      </div>

<style jsx>{`

.offeringsSection{
  position:relative;
  padding:120px 20px;
  overflow:hidden;
}

.bgImage{
  object-fit:cover;
  z-index:0;
}

.overlay{
  position:absolute;
  inset:0;
  background:linear-gradient(
    135deg,
    rgba(10,20,40,0.85),
    rgba(15,35,70,0.8)
  );
  z-index:1;
}

.container{
  position:relative;
  z-index:2;
  max-width:1200px;
  margin:auto;
}

.title{
  text-align:center;
  font-size:42px;
  color:white;
  margin-bottom:20px;
}

.intro{
  text-align:center;
  max-width:850px;
  margin:auto;
  color:#e5e5e5;
  font-size:18px;
  margin-bottom:70px;
}

.grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:40px;
}

.card{
  background:rgba(255,255,255,0.08);
  backdrop-filter:blur(10px);
  border-radius:20px;
  overflow:hidden;
  box-shadow:0 20px 40px rgba(0,0,0,0.4);
  transition:0.4s;
}

.card:hover{
  transform:translateY(-10px);
}

.imageWrapper{
  position:relative;
  height:220px;
}

.image{
  object-fit:cover;
}

.content{
  padding:25px;
  color:white;
}

.highlight{
  margin-top:12px;
  padding:10px;
  border-radius:10px;
  background:rgba(255,255,255,0.15);
}

.launchBox{
  margin-top:80px;
  background:rgba(0,0,0,0.55);
  padding:50px;
  border-radius:18px;
  color:white;
}

.launchBox h3{
  font-size:28px;
  margin-bottom:10px;
}

.launchBox ul{
  margin-top:15px;
  line-height:1.8;
}

@media(max-width:900px){
  .grid{
    grid-template-columns:1fr;
  }
}

`}</style>

    </section>
  );
}