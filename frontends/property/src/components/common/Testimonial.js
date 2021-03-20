import React from 'react';
import TestimonialItem from './TestimonialItem';

const TESTIMONIALS_LIST = [
  {
    id: '1',
    img:
      'https://ld-wp.template-help.com/wordpress_61155_v1/wp-content/uploads/2016/11/shutterstock_213159280-150x150.jpg',
    comment:
      'While staying in Indianapolis on my business affairs I always stay at this place. The price/quality ratio here is just outstanding, allowing me to save more money for other spends while visiting… My rating is 5 out of 5!',
    author: 'Martin van Buuren',
  },
  {
    id: '2',
    img:
      'https://ld-wp.template-help.com/wordpress_61155_v1/wp-content/uploads/2016/11/shutterstock_110631725-150x150.jpg',
    comment:
      'Choosing a hotel is always challenging, especially if you’re on a hectic schedule and are visiting the place for the first time. That’s why I was so happy that my guess with this hotel was definitely a lucky one.',
    author: 'Lyndon Johnson',
  },
  {
    id: '3',
    img:
      'https://ld-wp.template-help.com/wordpress_61155_v1/wp-content/uploads/2016/11/shutterstock_458275441-150x150.jpg',
    comment:
      'I’ve been visiting Indianapolis last year while touring across the Midwest with my family. The Family room is just great, the hotel’s restaurant (and bar) are nice and overall, even the price was very reasonable…',
    author: 'Theodore Roosevelt',
  },
];

const Testimonials = () => {
  const handleOnClick = () => {};
  return (
    <section className="testimonials">
      <p>read the reviews, written by</p>
      <span>our hotel's guest:</span>
      <ul>
        {TESTIMONIALS_LIST.map((item) => (
          <li key={item.id}>
            <TestimonialItem key={item.id} image={item.img} comment={item.comment} author={item.author} />
          </li>
        ))}
      </ul>
      <button onClick={handleOnClick}>
        SEE ALL TESTIMONIALS
      </button>
    </section>
  );
};

export default Testimonials;
