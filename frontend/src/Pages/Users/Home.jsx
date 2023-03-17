import React from 'react'
import NavBar from '../../Components/Reusable/NavBar'
import HomePoster from '../../Components/Home/HomePoster'
import TripSelector from '../../Components/Home/TripSelector'
import Packages from '../../Components/Home/Packages'
import IslandStays from '../../Components/Home/IslandStays'
import About from '../../Components/Home/About'
const Home = () => {
  return (
    <div>
       <NavBar/>
       <HomePoster/>
       <TripSelector/>
       <Packages/>
       <IslandStays/>
       <About/>
    </div>
  )
}

export default Home