
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

export default function BillboardScene() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ads.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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

      {/* SUNLIGHT */}
      <div className="sun-rays"></div>

      {/* CLOUDS */}
      <div className="clouds"></div>


      {/* BIRD FLOCK */}

      <motion.img
        src="https://pngimg.com/uploads/birds/birds_PNG30.png"
        className="birds"
        style={{ top: "70px", left: "-200px" }}
        animate={{ x: ["0vw", "120vw"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src="https://pngimg.com/uploads/birds/birds_PNG30.png"
        className="birds"
        style={{ top: "100px", left: "-260px", transform: "scale(.8)" }}
        animate={{ x: ["0vw", "120vw"] }}
        transition={{ duration: 12, repeat: Infinity, delay: 0.5 }}
      />

      <motion.img
        src="https://pngimg.com/uploads/birds/birds_PNG30.png"
        className="birds"
        style={{ top: "100px", left: "-140px", transform: "scale(.8)" }}
        animate={{ x: ["0vw", "120vw"] }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
      />


      {/* BILLBOARD */}
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


      {/* ROAD */}
      <div className="road">
        <div className="road-lines"></div>
      </div>


      {/* CAR 1 */}
      <motion.img
        src="/img/car1.png"
        className="car"
        animate={{ x: ["-300px", "120vw"] }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear"
        }}
      />


      {/* CAR 2 */}
      {/* <motion.img
        src="/img/car1.png"
        className="car"
        style={{ transform: "scaleX(-1)", bottom: "50px" }}
        animate={{ x: ["120vw", "-300px"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
          delay: 3
        }}
      /> */}


<style jsx global>{`

.scene{
position:relative;
width:100%;
height:900px;
background:#e6e6e6;
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;
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

.background img{
object-fit:cover;
}

/* sunlight */

.sun-rays{
position:absolute;
top:-150px;
right:-150px;
width:500px;
height:500px;

background:radial-gradient(circle,
rgba(255,210,120,0.7) 0%,
rgba(255,210,120,0.4) 30%,
rgba(255,210,120,0.15) 60%,
transparent 80%);

animation:sunPulse 8s ease-in-out infinite;
z-index:1;
}

@keyframes sunPulse{
0%{transform:scale(1)}
50%{transform:scale(1.08)}
100%{transform:scale(1)}
}

/* clouds */

.clouds{
position:absolute;
top:0;
left:0;
width:200%;
height:35%;
background:url("https://pngimg.com/uploads/cloud/cloud_PNG16.png") repeat-x;
background-size:contain;
opacity:.6;
z-index:3;
animation:cloudMove 80s linear infinite;
}

@keyframes cloudMove{
0%{transform:translateX(0)}
100%{transform:translateX(-50%)}
}

/* birds */

.birds{
position:absolute;
top:80px;
width:120px;
z-index:4;
opacity:.9;
}

/* billboard */

.billboard{
position:relative;
width:510px;
height:500px;
margin-top:165px;
margin-left:-800px;
z-index:5;
}

.billboard-frame{
width:100%;
height:100%;
object-fit:contain;
}

/* ad area */

.ad-area{
position:absolute;
top:13%;
left:9%;
width:82%;
height:45%;
overflow:hidden;
border-radius:6px;
}

.ad-area img{
object-fit:cover;
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

/* cars */

.car{
position:absolute;
bottom:20px;
width:220px;
z-index:6;
filter:drop-shadow(0 6px 6px rgba(0,0,0,.3));
}

/* tablet */

@media(max-width:992px){

.billboard{
width:420px;
height:260px;
margin-left:-400px;
}

.car{
width:180px;
}

}

/* mobile */

@media(max-width:768px){

.scene{
height:70vh;
}

.billboard{
width:300px;
height:200px;
margin-left:-150px;
margin-top:120px;
}

.car{
width:140px;
}

}

/* small mobile */

@media(max-width:480px){

.billboard{
width:240px;
height:160px;
margin-left:-120px;
}

.car{
width:110px;
}

}

`}</style>

    </section>
  );
}
