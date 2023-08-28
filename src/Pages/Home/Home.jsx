import React from 'react'
import "../../App.css"
import LeftSideBar from "../../components/LeftSidebar/LeftSidebar"
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainBar from '../../components/HomeMainbar/HomeMainbar'

const Home = () => {
  return (
    <div className="home-container-1">
      <LeftSideBar/>
      <div className="home-container-2">
        <HomeMainBar/>
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home