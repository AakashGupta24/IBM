import React from 'react'

const Footer = () => {
  return (
    <div>
          <footer className="footer flex-between">
      <h3 className="footer__logo">
        <span>Bharatvarsh</span>
      </h3>

      <ul className="footer__nav">
        <li><a href="#exploremap">Explore Map</a></li>
        <li><a href="#Shop">Shop</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about-us">About Us</a></li>
      </ul>

      <ul className="footer__social">
        <li className="flex-center">
          <img src="assets/facebook.svg" alt="facebook" />
        </li>
        <li className="flex-center">
          <img src="assets/instagram.svg" alt="instagram" />
        </li>
        <li className="flex-center">
          <img src="assets/twitter.svg" alt="twitter" />
        </li>
      </ul>
    </footer>

    </div>
  )
}

export default Footer