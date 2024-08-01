import React from 'react';

const brandCategories = [
  { name: 'Paints', count: 4, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a336d46428c95f93f05ee7ece03fe0e0a47bd36494865efbb036617c228441a?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23' },
  { name: 'Tools', count: 4, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ae1ee6d9bb133f3169ee63be2f82f46ab56ecc1653acbf748c217728234fda10?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23' },
  { name: 'Electrical', count: 5, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ef8d4a8ea6d88e03bb2c75e19d4f0c7caa0208b6ac5122901309852b3333a51?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23' },
  { name: 'Building Materials', count: 3, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ad3b542c859e1c16081240dd19fea655d57596a44d169e41713b9cb8b150f4d9?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23' }
];

const Brands = () => (
  <section className="brands">
    <h2 className="brands-title">Available Brands</h2>
    <div className="brands-grid">
      {brandCategories.map((category, index) => (
        <div key={index} className="brand-category">
          <img src={category.image} alt={category.name} className="brand-image" />
          <div className="brand-info">
            <p className="brand-count">{category.count} brands</p>
            <h3 className="brand-name">{category.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Brands;