import React from 'react'

const Popular = () => {
  return (
    <div>
        
    <section className="popular-foods" id="menu">
      <h2 className="popular-foods__title" data-aos="flip-up"> "A Gastronomic Voyage: Indian Delicacies for Every Palate"</h2>

      <div className="popular-foods__filters sushi__hide-scrollbar" data-aos="fade-up">
        <button className="popular-foods__filter-btn active">All</button>
        <button className="popular-foods__filter-btn">
          
          Maharashtra
        </button>
        <button className="popular-foods__filter-btn">
          
          Punjab
        </button>
        <button className="popular-foods__filter-btn">
          
          Kerela
        </button>
        <button className="popular-foods__filter-btn">
          
          Kashmir
        </button>
        <button className="popular-foods__filter-btn">Gujarat</button>
      </div>

      <div className="popular-foods__catalogue" data-aos="fade-up">
        <article className="popular-foods__card">
          <img className="popular-foods__card-image" src="assets/vadapav.png" alt="vadapav" />
          <h4 className="popular-foods__card-title">Vada Pav</h4>

          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
              
            </div>

            
          </div>
        </article>

        <article className="popular-foods__card active-card">
          <img className="popular-foods__card-image" src="assets/biryani.png" alt="biryani" />
          <h4 className="popular-foods__card-title">Biryani</h4>
          
          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
              
            </div>
            
            
          </div>
        </article>

        <article className="popular-foods__card">
          <img className="popular-foods__card-image" src="assets/panipuri.png" alt="panipuri" />
          <h4 className="popular-foods__card-title">Panipuri Or Golgappa</h4>

          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
              
            </div>

            
          </div>
        </article>
      </div>

      <button className="popular-foods__button">
        Explore Food
        <img src="assets/arrow-right.svg"  alt="arrow-right" />
      </button>
    </section>

    </div>
  )
}

export default Popular