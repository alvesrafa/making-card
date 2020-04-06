import React, {useEffect} from 'react';
import './style.css';
import styled from 'styled-components';


export default function Card(props){
  useEffect(()=> {console.log(props)}, [])
  return(
    <CardStyle 
      width={props.width} 
      height={props.height}
      shadow={props.shadow}
      bRadius={props.bRadius}
      border={props.border}
    >
      <div className="card-header">CARD TITLE</div>
      <div className="card-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit!</div>
      <div className="card-footer">CARD FOOTER</div>
    </CardStyle>
  )

  
}


const CardStyle = styled.div`
  overflow: hidden;
  
  background-color: #FFF;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  padding: 10px 0;

  border: ${props => props.border};
  border-radius: ${props => props.bRadius}px;
  box-shadow: ${props => props.shadow};
`;