import React from 'react'
import { Header } from '@/public/components'
const Map = () => {
  return (
    <div>
        <Header/>
        <div>
      {/* Replace the following with an SVG map of India with state names */}
      {/* For simplicity, I'll use a plain HTML map with state names */}
      <img
        src="assets/saree1.jpg"
        alt="India Map"
        useMap="#indiaMap"
        style={{ width: '100%', maxWidth: '800px' }}
      />
      <map name="indiaMap">
        {/* Define clickable areas for each state */}
        <area
          shape="poly"
          coords="100,50,150,100,150,50"
          alt="Andhra Pradesh"
        />
        {/* Add more state areas */}
      </map>
    </div>
    </div>
  )
}

export default Map