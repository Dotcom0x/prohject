import Lemonadestory from './assets/Lemonadestory.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <p>
        At the Lemonade Store, our story is as refreshing as the citrusy goodness we serve. It all began with a simple dream: to create the most delicious and invigorating lemonades that would bring smiles to people's faces. We embarked on a journey, fueled by passion and a commitment to quality.
Our adventure started in a small lemonade stand, where we experimented with different flavors, perfected our recipes, and listened to the laughter of satisfied customers. Word quickly spread about our irresistible lemonades, and demand grew like wildfire.
But our success goes beyond just great taste. We believe in the power of nature's bounty and the importance of using the finest ingredients. That's why we source the juiciest lemons, plump strawberries, and zesty limes to create our signature blends. Each sip is a burst of vibrant flavor that transports you to sun-kissed orchards and carefree summer days.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={Lemonadestory} alt="Chefs Mario and Adrian" />
     
      </div>
    </section>
  );
};

export default OurStory;
