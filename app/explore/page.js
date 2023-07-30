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
        src="assets/map.png"
        alt="India Map"
        useMap="#indiaMap" style={{mixBlendMode:'color-burn'}}
      />
      <map name="indiaMap">
        {/* Define clickable areas for each state */}
        <area target="" alt="" title="" href={`/shop/state/maharashtra`} coords="889,1517,595,1418" shape="rect"/>
    <area target="" alt="" title="" href={`/shop/state/rajasthan`} coords="518,841,814,994" shape="rect"/>
    <area target="" alt="" title="" href={`/shop/state/up`} coords="975,804,1295,978" shape="rect"/>
        {/* Add more state areas */}
      </map>
    </div>
    </div>
    
  )
}

export default Map