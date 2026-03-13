"use client";

import { amenitiesSections } from "@/data/aminities/amenitiesData";

const icons = ["🛡️", "🏛️", "🌿", "🤝"];

const gradients = [
  "linear-gradient(135deg,#2563eb,#06b6d4)",
  "linear-gradient(135deg,#f59e0b,#ef4444)",
  "linear-gradient(135deg,#22c55e,#10b981)",
  "linear-gradient(135deg,#8b5cf6,#6366f1)"
];

export default function AmenitiesSec() {

return(

<section className="amenities-section">

<div className="container">

<h1 className="title">
Exceptional Amenities at Viyad Bliss
</h1>

<p className="intro">
At Viyad Bliss, we believe modern comfort should never come at the
cost of natural peace. Our amenities enhance your lifestyle while
respecting the ecosystem of the Konkan.
</p>

<div className="grid">

{amenitiesSections.map((section,index)=>(

<div
key={index}
className="card"
style={{background:gradients[index]}}
>

<div className="card-inner">

<div className="icon">
{icons[index]}
</div>

<h3>{section.title}</h3>

<p className="desc">
{section.description}
</p>

<ul>
{section.items.map((item,i)=>(
<li key={i}>{item}</li>
))}
</ul>

</div>

</div>

))}

</div>

</div>

<style jsx>{`

.amenities-section{
padding:140px 0;
background:linear-gradient(180deg,#f8fafc,#eef6ff);
}

.container{
max-width:1200px;
margin:auto;
padding:0 20px;
}

.title{
text-align:center;
font-size:44px;
margin-bottom:15px;
color:#0f2a3c;
}

.intro{
text-align:center;
max-width:750px;
margin:auto;
margin-bottom:80px;
line-height:1.8;
color:#555;
}

/* GRID */

.grid{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:40px;
}

/* CARD */

.card{

border-radius:20px;
padding:2px;
transition:.4s ease;
position:relative;

}

.card-inner{

background:white;
padding:40px;
border-radius:18px;

height:100%;

transition:.4s;

}

.card:hover .card-inner{

transform:translateY(-12px);

box-shadow:0 30px 60px rgba(0,0,0,0.18);

}

/* ICON */

.icon{

width:60px;
height:60px;

border-radius:50%;

background:#f59e0b;

display:flex;
align-items:center;
justify-content:center;

font-size:28px;

margin-bottom:18px;

color:white;

}

/* TITLE */

h3{
font-size:24px;
margin-bottom:10px;
color:#0f2a3c;
}

/* TEXT */

.desc{
margin-bottom:20px;
color:#666;
}

ul{
padding-left:18px;
}

li{
margin-bottom:10px;
line-height:1.6;
}

/* MOBILE */

@media(max-width:900px){

.grid{
grid-template-columns:1fr;
}

.title{
font-size:34px;
}

}

`}</style>

</section>

)

}