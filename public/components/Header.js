import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
      
      <header>
      <nav className="header__nav">
        <div className="header__logo">
          <h4 data-aos="fade-down"><a href="/"> Bharatvarsh </a></h4>
          <div className="header__logo-overlay"></div>
        </div>

        <ul className="header__menu" data-aos="fade-down">
          <li>
          <Link href={`/explore`}>EXPLORE MAP</Link>
          </li>
          <li>
          <Link href={`/shop`}>SHOP</Link>
          </li>
          <li>
          <Link href={`/services`}>SERVICES</Link>
          </li>
          <li>
          <Link href={`/aboutus`}>ABOUT US</Link>
          </li>
          <li>
            <img src="assets/search.svg" alt="search" />
          </li>
        </ul>

        <ul className="header__menu-mobile" data-aos="fade-down">
          <li>
            <img src="assets/menu.svg" alt="menu" />
          </li>
        </ul>
      </nav>
    </header>

    </div>
  )
}

export default Header