import React from 'react'
import CardsUI from '../components/Cards/CardsUI'
import Card from "../components/Cards/Cards.js"
import Navbar from "../components/Navbar/Navbar"
function Dashboard() {
  return (
    <div>
      <div><Navbar /></div>
     <div><Card/></div> 
    </div>
  )
}

export default Dashboard