import React from 'react'
import CardsUI from '../components/Cards/CardsUI'
import PosterCard from "../components/Cards/PosterCards.js"
import Navbar from "../components/Navbar/Navbar"

function Poster() {
  return (
    <div>
      <div><Navbar/></div>
      <div><PosterCard/></div>
    </div>
  )
}

export default Poster;