export default function TestimonialCard({quote,author}){

return(

<div className="testimonial-card">

<p>"{quote}"</p>

<span className="author">— {author}</span>

</div>

);
}