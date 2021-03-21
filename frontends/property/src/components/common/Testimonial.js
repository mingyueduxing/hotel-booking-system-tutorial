import TestimonialItem from './TestimonialItem'
const testimonials = [{
    avatar: 'https://ld-wp.template-help.com/wordpress_61155_v1/wp-content/uploads/2016/11/shutterstock_213159280-150x150.jpg',
    description: 'While staying in Indianapolis on my business affairs I always stay at this place. The price/quality ratio here is just outstanding, allowing me to save more money for other spends while visiting… My rating is 5 out of 5!',
    name: 'Martin van Buuren',
}, {
    avatar: 'https://ld-wp.template-help.com/wordpress_61155_v1/wp-content/uploads/2016/11/shutterstock_213159280-150x150.jpg',
    description: 'While staying in Indianapolis on my business affairs I always stay at this place. The price/quality ratio here is just outstanding, allowing me to save more money for other spends while visiting… My rating is 5 out of 5!',
    name: 'Martin van Buuren',
}, {
    avatar: 'https://ld-wp.template-help.com/wordpress_61155_v1/wp-content/uploads/2016/11/shutterstock_213159280-150x150.jpg',
    description: 'While staying in Indianapolis on my business affairs I always stay at this place. The price/quality ratio here is just outstanding, allowing me to save more money for other spends while visiting… My rating is 5 out of 5!',
    name: 'Martin van Buuren',
}]

const Testimonial = () => <section className="section--testimonial">
    <h2>read the reviews, written by</h2>
    <h1>Our Hotel’s Guests:</h1>
    <ul>
        {testimonials.map((item, index) => <li key={index}>
            <TestimonialItem {...item} />
        </li>)}
    </ul>
    <button>see all testimonials</button>
</section>

export default Testimonial