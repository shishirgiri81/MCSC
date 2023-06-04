import React, { useEffect, useState,useRef } from 'react'
import { BiRectangle } from "react-icons/bi"
import { BsFillEraserFill, BsTriangle } from "react-icons/bs"
import { BsCircle } from "react-icons/bs"
import { IoHandLeftOutline } from "react-icons/io5"
import { AiOutlineBgColors } from "react-icons/ai"
import { FaBezierCurve, FaPencilAlt } from "react-icons/fa"
import { CiPen } from "react-icons/ci"


import '../App.css'

export const Navbar = (props) => {

    const colorRange=useRef();
    const [tool, setTool] = React.useState('pen');
    const [tools, setTools] = useState({
        pencilTool: true,
        penTool: false,
        eraser: false,
        color: false,
        circle: false,
        rectangle: false,
        triangle: false,
        qBezier: false
    })

    useEffect(() => {

    }, [tools])

    const rectClicked = () => {
        setTools({
            pencilTool: false,
            penTool: false,
            eraser: false,
            color: false,
            circle: false,
            rectangle: true,
            triangle: false,
            qBezier: false

        })
        props.getData(tools);
    }
    const triClicked = () => {
        setTools({
            pencilTool: false,
            penTool: false,
            eraser: false,
            color: false,
            circle: false,
            rectangle: false,
            triangle: true,
            qBezier: false

        })
        props.getData(tools);

    }
    const circleClicked = () => {
        setTools({
            pencilTool: false,
            penTool: false,
            eraser: false,
            color: false,
            circle: true,
            rectangle: false,
            triangle: false,
            qBezier: false

        })
        props.getData(tools);
    }
    const pencilClicked = () => {
        if (tools !== "pen") {
            setTools({
                pencilTool: true,
                penTool: false,
                eraser: false,
                color: false,
                circle: false,
                rectangle: false,
                triangle: false,
                qBezier: false
            })
            setTool(false);
            props.getTooldata("pen")
            props.getData(tools);
        }
    }
    const qBezierClicked = () => {
        setTools({
            pencilTool: false,
            penTool: false,
            eraser: false,
            color: false,
            circle: false,
            rectangle: false,
            triangle: false,
            qBezier: true

        })
        props.getData(tools);
    }
    const penToolClicked = () => {
        setTools({
            pencilTool: false,
            penTool: true,
            eraser: false,
            color: false,
            circle: false,
            rectangle: false,
            triangle: false,
            qBezier: false

        })
        props.getData(tools);
    }
    const eraserClicked = () => {
        if (tool !== "eraser") {
            setTools({
                pencilTool: false,
                penTool: false,
                eraser: true,
                color: false,
                circle: false,
                rectangle: false,
                triangle: false,
                qBezier: false

            })

            setTool("eraser");
            props.getTooldata("eraser")
            console.log(tool);
        props.getData(tools);
        }
    }
    const colorClicked = () => {
        setTools({
            pencilTool: false,
            penTool: false,
            eraser: false,
            color:true,
            circle: false,
            rectangle: false,
            triangle: false,
            qBezier: false

        })

        props.getData(tools);

        props.getColor(colorRange.current.value)

    }





    return (
        <div>

            <div className='navbar'>

                <div className='logo'>



                </div>

                <div className='tools'>

                    <button className='rectangle-btn' onClick={rectClicked}>

                        <BiRectangle />

                    </button>

                    <button className='triangle-btn' onClick={triClicked}>

                        <BsTriangle />

                    </button>

                    <button className='circle-btn' onClick={circleClicked}>

                        <BsCircle />

                    </button>

                    <button className='quad-bezier-btn' onClick={qBezierClicked}>

                        <FaBezierCurve />

                    </button>

                    <button className='cubic-bezier-btn' onClick={penToolClicked}>

                        <CiPen />

                    </button>

                    <button className='hand-btn' onClick={eraserClicked}>

                        <BsFillEraserFill />
                    </button>
                    <button className='hand-btn' onClick={pencilClicked}>
                        <FaPencilAlt />
                    </button>

                    <button className='colorPalette-btn' >
                        <input type="color" name="color" id="color" onClick={colorClicked} ref={colorRange} />
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
