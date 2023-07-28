import React from 'react'

const Subscribe = () => {
  return (
    <div>
           <section className="subscription flex-center" id="services">
      <h2 data-aos="flip-down">
        Immerse Yourself in India:<br /> Read Our Blog
      </h2>
      <p data-aos="fade-up">Signup for the Bharatvarsh Newsletter</p>
      <p data-aos="fade-up">Dive deeper into India's culture, traditions, and travel experiences through our engaging blog posts. From festive celebrations and regional art forms to hidden gems off the beaten path, our blog offers a comprehensive look at the many facets of India.</p>

      <div className="subscription__form" data-aos="fade-up">
        <input type="text" placeholder="Enter your email address"/>
        <button>Get Started</button>
      </div>
    </section>
    </div>
  )
}

export default Subscribe