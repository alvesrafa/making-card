import React, { useState, useEffect } from 'react';
import './App.css';
import Aside from './components/Aside';
import { ThemeProvider } from 'styled-components';
import Card from './components/Card';
function App() {
  const [width, setWidth] = useState(250);
  const [height, setHeight] = useState('');
  const [bRadius, setBRadius] = useState(4);
  const [shadowPosition, setShadowPosition] = useState(3);
  const [shadowColor, setShadowColor] = useState('');
  const [shadowBlur, setShadowBlur] = useState(8);
  const [shadowSpread, setShadowSpread] = useState(5);
  const [border, setBorder] = useState(0);
  const [borderColor, setBorderColor] = useState('');

  let styles = {
    width,
    height,
    bRadius,
    shadow: `${shadowPosition}px ${shadowPosition}px ${shadowBlur}px ${shadowSpread}px ${shadowColor.rgba}`,
    border: `${border}px solid ${borderColor.rgba}`
  }

  return (
    <div id="App">
      <Aside
        width={width} setWidth={setWidth}
        height={height} setHeight={setHeight}
        bRadius={bRadius} setBRadius={setBRadius}
        shadowPosition={shadowPosition} setShadowPosition={setShadowPosition}
        shadowColor={shadowColor} setShadowColor={setShadowColor}
        shadowBlur={shadowBlur} setShadowBlur={setShadowBlur}
        shadowSpread={shadowSpread} setShadowSpread={setShadowSpread}
        border={border} setBorder={setBorder}
        borderColor={borderColor} setBorderColor={setBorderColor}
      
      />
      <main>
        <div className="content-view">
            <Card 
              width={width}
              height={height}
              bRadius={bRadius}
              shadow={`${shadowPosition}px ${shadowPosition}px ${shadowBlur}px ${shadowSpread}px ${shadowColor.rgba ? shadowColor.rgba : '#DDD'}`}
              border={`${border}px solid ${borderColor.rgba ? borderColor.rgba : '#DDD'}`}
            />
          
        </div>
        <div className="content-code">

        </div>
      </main>
    </div>
  );
}

export default App;
