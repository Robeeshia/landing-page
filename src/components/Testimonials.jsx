import React from 'react';

const testimonials = [
  {
    name: 'Santhosh',
    role: 'Former',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6163979bd992e818dc982d0f1456ec3859c3877043949e914810de0e4554d746?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23',
    stars: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9ea244e8bdb3568c0c1871d0beacfeb628f3e56b446b047bab1e776b687e51bc?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim'
  },
  {
    name: 'Selvaruban',
    role: 'Shop',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/05e47ffbbf92a410c15ab8d15c187de794ab138de9b337a5c815d53ea98c5979?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23',
    stars: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a185578055f7d6f4682ca2c204f7a7b2f5ab579b63c6f632a6258fdefbb88987?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim'
  },
  {
    name: 'Sameer',
    role: 'Worker',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a9f2bd9e821bab0fdd14a70bd4260df4a983908b02587cabe2cda4ebe5411047?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23',
    stars: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d3cdd705f8e907cbdb8da8b1f80ee78354ca275c0147c4380f0f67c716f246d2?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim'
  }
];

const Testimonials = () => (
  <section className="testimonials" id="testimonials">
    <h2 className="testimonials-title">Testimonials</h2>
    <h3 className="testimonials-subtitle">"Words from Our Customers"</h3>
    <div className="testimonials-carousel">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7afc7cedbdfb8d37c8e167112342b19b2f9e754c15b16497929601d2bb1d82e8?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23" alt="" className="carousel-arrow left" />
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
          <img src={testimonial.stars} alt="Rating" className="testimonial-stars" />
          <h4 className="testimonial-name">{testimonial.name}</h4>
          <p className="testimonial-role">{testimonial.role}</p>
          <p className="testimonial-quote">{testimonial.quote}</p>
        </div>
      ))}
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6364edec7dc61985475a171d3ba66c1c683de1eb86803bc33b2333af07b49867?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23" alt="" className="carousel-arrow right" />
    </div>
  </section>
);

export default Testimonials;