import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Jessica Tan',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `The classic lemonade I purchased from The Lemonade Stand reminded me of the taste of my childhood. It brings a fresh and peaceful feeling, 
    as if I'm surrounded by the aroma of lemon orchards!`,
  },
  {
    fullName: 'Robert Lee',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `As a strawberry lover, I was blown away by the Strawberry Lemonade from the Lemonade Store. The flavor is incredibly refreshing,
     with the natural sweetness of strawberries blending perfectly with the tangy lemonade.`,
  },

];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
