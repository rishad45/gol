import React from 'react'
import NavBar from '../../Components/Reusable/NavBar'
import HomePoster from '../../Components/Home/HomePoster'
import TripSelector from '../../Components/Home/TripSelector'
import Packages from '../../Components/Home/Packages'
const Home = () => {
  return (
    <div>
       <NavBar/>
       <HomePoster/>
       <TripSelector/>
       <Packages/>
    </div>
  )
}

export default Home