import React from 'react'
import {BiRectangle} from "react-icons/bi"
import {BsTriangle} from "react-icons/bs"
import {BsCircle} from "react-icons/bs"
import {IoHandLeftOutline} from "react-icons/io5"
import {AiOutlineBgColors} from "react-icons/ai"
import {FaBezierCurve} from "react-icons/fa"
import {CiPen} from "react-icons/ci"


import './Navbar.css'

export const Navbar = () => {
  return (
    <div>

      <div className='navbar'>

        <div className='logo'>



        </div>

        <div className='tools'>

          <button className='rectangle-btn'>

            <BiRectangle/>

          </button>

          <button className='triangle-btn'>

            <BsTriangle/>

          </button>

          <button className='circle-btn'>

            <BsCircle/>

          </button>

          <button className='quad-bezier-btn'>

            <FaBezierCurve/>

          </button>

          <button className='cubic-bezier-btn'>

            <CiPen/>  

          </button>

          <button className='hand-btn'>

            <IoHandLeftOutline/>

          </button>

          <button className='colorPalette-btn'>
            
            <AiOutlineBgColors/>

          </button>


        </div>


        <div className='saveDiv'>
          
          <button className='save-btn'>

            Save

          </button>

        </div>

        

      </div>


    </div>
  )
}
