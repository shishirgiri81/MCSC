import React, { useEffect, useRef, useState } from 'react';
import Konva from 'konva';

const ModifyCurves = ({color}) => {

  const containerRef = useRef(null);

  const[data,setData] =useState({
    startX:200,
    startY:100,
    endX:150,
    endY:150
  })






  useEffect(() => {
    const width = 400;
    const height =400;
     
    console.log(data);


   
    // Function to build anchor point
    const buildAnchor = (x, y) => {
      const anchor = new Konva.Circle({
        x: x,
        y: y,
        radius: 6,
        stroke: '#666',
        fill: '#7bfc53',
        strokeWidth: 2,
        draggable: true,
      });
      layer.add(anchor);

      // Add hover styling
      anchor.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
        this.strokeWidth(2);
        layer.batchDraw();
      });
      anchor.on('mouseout', function () {
        document.body.style.cursor = 'default';
        this.strokeWidth(1);
        layer.batchDraw();
      });

      anchor.on('dragmove', function () {
        
        updateDottedLines();
      });

      return anchor;
    };

    const stage = new Konva.Stage({
      container: containerRef.current,
      width: width,
      height: height,
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    // Function to update line points from anchors
    const updateDottedLines = () => {
      const b = bezier;

      const bezierLinePath = layer.findOne('#bezierLinePath');



      bezierLinePath.points([
        b.start.x(),
        b.start.y(),
        b.control1.x(),
        b.control1.y(),
        b.control2.x(),
        b.control2.y(),
        b.end.x(),
        b.end.y(),

      ]);
      setData({
        startX:b.control1.x(),
        startY:b.control1.y(),
        endX:b.control2.x(),
        endY:b.control2.y(),
      })

      layer.batchDraw();
    };


    // Custom shape for Bezier curve
    const bezierLine = new Konva.Shape({
      stroke: {color},
      strokeWidth: 5,
      sceneFunc: (ctx, shape) => {
        ctx.beginPath();
        ctx.moveTo(bezier.start.x(), bezier.start.y());
        ctx.bezierCurveTo(
          bezier.control1.x(),
          bezier.control1.y(),
          bezier.control2.x(),
          bezier.control2.y(),
          bezier.end.x(),
          bezier.end.y()
        );
        ctx.fillStrokeShape(shape);
      },
    });
    layer.add(bezierLine);

    const bezierLinePath = new Konva.Line({
      dash: [10, 10, 0, 10],
      strokeWidth: 3,
      stroke: color,
      lineCap: 'round',
      id: 'bezierLinePath',
      opacity: 0.3,
      points: [0, 0],
    });
    layer.add(bezierLinePath);

    const bezier = {
      start: buildAnchor(0, 400),
      control1: buildAnchor(200, 100),
      control2: buildAnchor(150, 150),
      end: buildAnchor(400,0 ),
    
    };

    updateDottedLines();
   



    return () => {
      stage.destroy();
    };
  }, []);

  return (
  <div ref={containerRef} id="container">
  </div>

  );
};

export default ModifyCurves;
