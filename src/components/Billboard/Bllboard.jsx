"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ads = [
  "/img/storycard-03.jpg",
  "/img/storycard-04.jpg",
  "/img/storycard-05.jpg",
  "/img/storycard-03.jpg"
];

/* road amenities */

const roadAmenities = [
  "🏊 Swimming Pool",
  "🎾 Sports Court",
  "🧘 Yoga Deck",
  "🔥 Bonfire Area",
  "🚴 Cycling Track"
];

/* plot positions near house */

const plotPositions = [
  { top: "52%", right: "35%" },
  { top: "60%", right: "52%" },
  { top: "47%", right: "20%" },
  { top: "68%", right: "40%" }
];

export default function BillboardScene() {

  const [current, setCurrent] = useState(0);
  const [amenity, setAmenity] = useState("");
  const [position, setPosition] = useState({});

  /* billboard rotation */

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ads.length);
    }, 3000);

    return () => clearInterval(interval);

  }, []);

  /* show amenity when cursor on road */

  const handleRoadMove = () => {

    const randomAmenity =
      roadAmenities[Math.floor(Math.random() * roadAmenities.length)];

    const randomPlot =
      plotPositions[Math.floor(Math.random() * plotPositions.length)];

    setAmenity(randomAmenity);
    setPosition(randomPlot);

  };

  return (

<section className="scene">

{/* BACKGROUND */}

<div className="background">
<Image
src="/img/konkan-bg.png"
alt="Konkan Landscape"
fill
priority
/>
</div>

{/* BILLBOARD (UNCHANGED) */}

<div className="billboard">

<Image
src="/img/2359035.png"
alt="billboard"
fill
className="billboard-frame"
/>

<div className="ad-area">
<Image
src={ads[current]}
alt="ad"
fill
/>
</div>

</div>

{/* AMENITY DISPLAY */}

{amenity && (

<motion.div
className="amenity"
style={position}
key={amenity}
initial={{opacity:0,scale:.8}}
animate={{opacity:1,scale:1}}
transition={{duration:.3}}
>

{amenity}

</motion.div>

)}

{/* ROAD AREA */}

<div
className="road"
onMouseMove={handleRoadMove}
>
<div className="road-lines"></div>
</div>

<style jsx global>{`

.scene{
position:relative;
width:100%;
height:900px;
overflow:hidden;
}

/* background */

.background{
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
z-index:0;
}

/* billboard unchanged */

.billboard{
position:relative;
width:510px;
height:500px;
margin-top:165px;
margin-left:-800px;
z-index:5;
}

.billboard-frame{
object-fit:contain;
}

.ad-area{
position:absolute;
top:13%;
left:9%;
width:82%;
height:45%;
overflow:hidden;
border-radius:6px;
}

/* amenity */

.amenity{
position:absolute;
color:white;
font-size:28px;
font-weight:800;
text-shadow:0 5px 15px rgba(0,0,0,.7);
z-index:7;
}

/* road */

.road{
position:absolute;
bottom:0;
width:100%;
height:120px;
background:#2f2f2f;
z-index:4;
}

.road-lines{
position:absolute;
top:50%;
width:100%;
height:6px;
background:repeating-linear-gradient(
to right,
white 0px,
white 40px,
transparent 40px,
transparent 80px
);
}

`}</style>

</section>

  );
}e