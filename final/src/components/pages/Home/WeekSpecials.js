import { Link } from 'react-router-dom';
import Classic from './assets/Classic.jpg';
import Strawberry from './assets/Strawberry.jpg';
import Lime from './assets/Lime.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: ' Classic',
    image: Classic,
    price: '$6',
    description: `Quench your thirst with the timeless taste of our Classic Lemonade. Made with freshly squeezed 
    lemons and just the right amount of sweetness.`,
  },
  {
    name: 'Strawberry Lemonade',
    image: Strawberry,
    price: '$8',
    description: `Savor the sweet and tangy fusion of flavors with our irresistible Strawberry Lemonade. 
    Crafted with plump, juicy strawberries and zesty lemons.`,
  },
  {
    name: 'Lime Lemonade',
    image: Lime,
    price: '$10',
    description: `Experience a zesty twist on a classic favorite with our Lime Lemonade.
     Made with freshly squeezed limes and juicy lemons.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
      
      </div>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
