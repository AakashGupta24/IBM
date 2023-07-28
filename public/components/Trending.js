import React from 'react'

const Trending = () => {
  return (
    <div>
          <section className="trending" id="food">
      <section className="trending-sushi">
        <div className="trending__content" data-aos="fade-right">
          
          <h3 className="sushi__title">Exquisite Handicrafts
          </h3>
          <p className="sushi__description">Adorn your living spaces with handpicked Indian artifacts. Discover beautifully crafted sculptures, paintings, textiles, and home decor that carry the essence of India's artistic brilliance.
          </p>
  
          <ul className="trending__list flex-between">
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Intricate Textiles</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Timeless Pottery</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Elegant Woodwork</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Enchanting Paintings</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Metal Craftsmanship</p>
            </li>
            
          </ul>
        </div>
  
        <div className="trending__image flex-center">
          <img src="assets/handicraft.jpg" alt="handicraft" data-aos="fade-left" />
  
          <div className="trending__arrow trending__arrow-left">
            <img src="assets/arrow-vertical.svg" alt="arrow vertical" />
          </div>
  
          <div className="trending__arrow trending__arrow-bottom">
            <img src="assets/arrow-horizontal.svg" alt="arrow horizontal" />
          </div>
        </div>

      </section>

      <div className="trending__discover" data-aos="zoom-in">
        <p>Discover</p>
      </div>

      <section className="trending-drinks">
        <div className="trending__image flex-center">
          <img src="assets/attire.jpg" alt="attire" data-aos="fade-right" />
  
          <div className="trending__arrow trending__arrow-top">
            <img src="assets/arrow-horizontal.svg" alt="arrow horizontal" />
          </div>
  
          <div className="trending__arrow trending__arrow-right">
            <img src="assets/arrow-vertical.svg" alt="arrow vertical" />
          </div>
        </div>

        <div className="trending__content" data-aos="fade-left">
          
  
          <h3 className="sushi__title">Traditional Indian Attire
          </h3>
          <p className="sushi__description">Dress in the charm of India with our collection of elegant ethnic wear. From colorful sarees to intricately designed Kurtas, embrace the grace and beauty of Indian clothing.
          </p>
  
          <ul className="trending__list flex-between">
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Sarees - Drapes of Grace</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>
                Kurtas and Kurtis - Timeless Comfort</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Lehengas - The Royal Ensemble</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Sherwanis and Bandhgalas - Dapper Sophistication</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Salwar Kameez - Graceful Harmony</p>
            </li>
            
          </ul>
        </div>
      </section>
    </section>

    </div>
  )
}

export default Trending