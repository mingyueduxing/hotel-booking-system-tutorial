import '../styles/reviews.scss'

const Reviews = (props) => <section className='TestiMonials_container'>
  <ul>
    <li><section><img src={`${props.image}`} alt="error" /></section></li>
    <li><section><p>{props.comment}</p></section></li>
    <li><section><h2>— {props.author}</h2></section></li>
  </ul>
</section>

export default Reviews;