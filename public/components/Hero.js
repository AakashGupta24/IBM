import React from 'react'

const Hero = () => {
  return (
    <div>
         <section className="hero">
      <div className="hero-image">
        <img 
          src="assets/indiaback.jpg"
          alt="india"
          data-aos="fade-right"
        />
        
        <div className="hero-image__overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-content-info" data-aos="fade-left">
          <h1>Discover India's Cultural Kaleidoscope</h1>
          <p>Feel the culture and diversity of India on this journey.</p>

          <div className="hero-content__buttons">
            <button className="hero-content__order-button">Shop Now</button>
            <button className="hero-content__play-button">
              <img src="assets/play-circle.svg" alt="play" />
              How to Order
            </button>
          </div>
        </div>

        <div className="hero-content__testimonial" data-aos="fade-up">
          <div className="hero-content__customer flex-center">
            <h4>24<span>k+</span></h4>
            <p>Happy Customers</p>
          </div>

          <div className="hero-content__review">
            <img src="assets/user.png" alt="user" />
            <p>"This is the best website has the best collection of antiques representing India and its culture."</p>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Hero