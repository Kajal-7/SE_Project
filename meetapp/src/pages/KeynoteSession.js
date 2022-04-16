import React from 'react'
import CardsUI from '../components/Cards/CardsUI'
import KeyCard from "../components/Cards/KeynoteCards.js"
import Navbar from "../components/Navbar/Navbar"

function KeynoteSession() {
  return (
    <div>
      <div><Navbar/></div>
      <div><KeyCard/></div>
    </div>
  )
}

export default KeynoteSession;