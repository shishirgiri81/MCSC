import React, { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import ModifyCurves from './pages/CheckCurve';
import { Layer, Stage } from 'react-konva';
import { Slider,Box, Button } from '@mui/material';
import { Rect } from 'react-konva';
function App() {

  //ease	cubic-bezier(0.25, 0.1, 0.25, 1.0)
  //ease-in	cubic-bezier(0.42, 0, 1.0, 1.0)
  //ease-in-out (.17,.67,.83,.67)
//ease-out	cubic-bezier(0, 0, 0.58, 1.0)
//linear (0,0,1,1)
//ease in expo cubic-bezier(0.7, 0, 0.84, 0);
//ease in back cubic-bezier(0.36, 0, 0.66, -0.56);

 // ease in out cubic-bezier(0.42, 0, 0.58, 1.0)

const[valRange,setValRange]=useState(300)

const[valRange2,setValRange2]=useState(800)

  const [trigger,setTrigger]=useState(true)


  const [tool, setTool] = React.useState('pen');
  const [color, setColor] = useState('#000000')

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

  const[data,setData] =useState({
    startX:200,
    startY:100,
    endX:150,
    endY:150
  })

  useEffect(()=>{
console.log(data);
  },[data])

  const clickedTools = (data) => {
    setTools(data)

  }
  const getColor = (data) => {
    setColor(data)
    console.log(data);
  }
  const getData=(data)=>{
    setData(data);


  }

  //<Canvas color={color} tool={tool} tools={tools}/>
  const toolData = (data) => {
    setTool(data)
    console.log(data);
  }

  useEffect(()=>{
    console.log(valRange);
  },[valRange])
  return (
    <div style={{overflowX:'hidden'}}>
      <Layer>
        <Navbar getData={clickedTools} getTooldata={toolData} getColor={getColor} />
        <ModifyCurves color={color} className='mt' getData={getData}/>
        </Layer>

        <div className={`transition  pt-7 bg-slate-500 ease-[cubic-bezier(0.36, 0, 0.66, -0.56)] h-[90%] w-[20%]  duration-${valRange} ${(trigger)?'translate-x-0':'translate-x-[200%]'} `}>
        </div>
        <div className={`transition  pt-7 bg-slate-400  ease-[cubic-bezier(0.95,0.05,0.795,0.035)] h-[90%] w-[20%] mt-3  duration-${valRange2} ${(trigger)?'translate-x-0':'translate-x-[200%]'} `}>
        </div>

    <Box width={300}>
 
      <Slider defaultValue={300} step={100} aria-label="Default" valueLabelDisplay="auto" max={2000} min={100} value={valRange} onChange={(e)=>{setValRange(e.target.value)}}/>
      <Slider defaultValue={800} step={100} aria-label="Default" valueLabelDisplay="auto" max={2000} min={100} value={valRange2} onChange={(e)=>{setValRange2(e.target.value)}}/>
      <Button onClick={(e)=>{setTrigger(false)}} >Start</Button>
      <Button onClick={(e)=>{setTrigger(true)}}>stop</Button>
    </Box>

    </div>
  )
}

export default App