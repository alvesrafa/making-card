import React, { useState, useEffect } from 'react';
import './App.css';
import Aside from './components/Aside';
import Card from './components/Card';
function App() {
  const [width, setWidth] = useState(250);
  const [height, setHeight] = useState('auto');
  const [bRadius, setBRadius] = useState(4);
  const [shadowPosition, setShadowPosition] = useState(3);
  const [shadowColor, setShadowColor] = useState('');
  const [shadowBlur, setShadowBlur] = useState(4);
  const [shadowSpread, setShadowSpread] = useState(1);
  const [border, setBorder] = useState(0);
  const [borderColor, setBorderColor] = useState('');

  let teste = `
    background-color: #FFF;
    width: ${width}px;
    height: ${height}px;
    padding: 10px 0;

    border: ${border}px solid ${borderColor.rgba ? borderColor.rgba : '#DDD'};
    border-radius: ${bRadius}px;
    box-shadow: ${shadowPosition}px ${shadowPosition}px ${shadowBlur}px ${shadowSpread}px ${shadowColor.rgba ? shadowColor.rgba : '#DDD'};
  `;
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
        <Card 
          width={width}
          height={height}
          bRadius={bRadius}
          shadow={`${shadowPosition}px ${shadowPosition}px ${shadowBlur}px ${shadowSpread}px ${shadowColor.rgba ? shadowColor.rgba : '#DDD'}`}
          border={`${border}px solid ${borderColor.rgba ? borderColor.rgba : '#DDD'}`}
        />
        <code>
          <pre>
            background-color: #FFF; <br/>
            width: {width}px;<br/>
            height: {height}px;<br/>
            padding: 10px 0;<br/>
            border: {border}px solid {borderColor.rgba ? borderColor.rgba : '#DDD'};<br/>
            border-radius: {bRadius}px;<br/>
            box-shadow: {shadowPosition}px {shadowPosition}px {shadowBlur}px {shadowSpread}px {shadowColor.rgba ? shadowColor.rgba : '#DDD'};<br/>
          </pre>
        </code>
      </main>
    </div>
  );
}

export default App;
