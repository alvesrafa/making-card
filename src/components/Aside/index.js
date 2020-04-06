import React from 'react';
import './style.css';
import InputColor from 'react-input-color';

export default function Aside(props){

  return (
    <div id="aside" >
        <div className="title">
          <h1>Make your card <i data-feather="circle"></i></h1>
        </div>
        <div className="props">
          <div className="prop">
            <div className="input-block">
              <label>Width</label>
              <input type="text" on="teste()" value={props.width} onChange={(e)=> props.setWidth(e.target.value)}/>
            </div>
            <div className="input-block">
              <label>Heigth</label>
              <input type="text" id="heigth" value={props.height} onChange={(e)=> props.setHeight(e.target.value)}/>
            </div>
          </div>
          <div className="prop">
            <div className="input-block">
              <label>Border radius {props.bRadius}px</label> 
              <input type="range" min="0" max="100" value={props.bRadius} onChange={(e)=> props.setBRadius(e.target.value)}/>
            </div>
          </div>
          <div className="prop">
            <div className="input-block">
              <label>Shadow position {props.shadowPosition}px</label>
              <input type="range" min="0" max="45" value={props.shadowPosition} onChange={(e)=> props.setShadowPosition(e.target.value)}/>
            </div>
            <div className="input-block">
              <label>Color</label>
              <InputColor
                initialValue="#aaa"
                onChange={props.setShadowColor}
              />
              
            </div>
          </div>
          <div className="prop">
            <div className="input-block">
              <label>Shadow blur {props.shadowBlur}px</label>
              <input type="range" min="0" max="75" value={props.shadowBlur} onChange={(e)=> props.setShadowBlur(e.target.value)}/>
            </div>
            <div className="input-block">
              <label>Shadow spread {props.shadowSpread}px</label>
              <input type="range" min="0" max="60" value={props.shadowSpread} onChange={(e)=> props.setShadowSpread(e.target.value)}/>
            </div>
          </div>
          <div className="prop">
            <div className="input-block">
              <label>Border {props.border}px</label>
              <input type="range" min="0" max="10" value={props.border} onChange={(e)=> props.setBorder(e.target.value)}/>
            </div>
            <div className="input-block">
              <label>Color</label>
              <InputColor
                initialValue="#000"
                onChange={props.setBorderColor}
              />
              
            </div>
          </div>
        </div>
      </div>
  )
}