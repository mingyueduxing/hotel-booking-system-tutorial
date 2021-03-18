
const TestimonialItem = (props) => <section className='testimonialItem'>
    <img src={props.image} alt="user avatar" />
    <p>{props.comment}</p>
    <h2>— {props.author}</h2>
</section>

export default TestimonialItem;