import React from 'react'

const About = () => {
  return (
    <div>
         <section className="about-us" id="about-us">
      <div className="about-us__image">
        <div className="about-us__image-sushi3">
          <img src="assets/krishna.jpg" alt="krishna" data-aos="fade-right" />
        </div>

        <button className="about-us__button">
          Learn More

          <img src="assets/arrow-up-right.svg" alt="learn more" />
        </button>

        <div className="about-us__image-sushi2">
          <img src="assets/holi1.jpg" alt="holi1"  data-aos="fade-right" />
        </div>
      </div>

      <div className="about-us__content"  data-aos="fade-left">
        <p className="sushi__subtitle">India's Cultural Mosaic </p>
        <h3 className="sushi__title">"Unity in Diversity: Embracing India's Multifaceted Identity"</h3>
        <p className="sushi__description">India's cultural diversity is a testament to the country's unique tapestry, woven together by countless threads of customs, languages, and art forms. From the snow-capped peaks of the Himalayas to the sun-kissed shores of Kerala, India embraces a myriad of cultures, each with its own distinct charm. Immerse yourself in the fascinating tales of India's past and its vibrant present.
        </p>
      </div>
    </section>
    </div>
  )
}

export default About