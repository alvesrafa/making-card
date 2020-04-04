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
      <div className="card-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse placeat aliquam quisquam laudantium rerum facilis est voluptas illum minima eos voluptatibus nobis minus mollitia tenetur alias, consequuntur veniam facere vitae!</div>
      <div className="card-footer">CARD FOOTER</div>
    </CardStyle>
  )

  
}


const CardStyle = styled.div`
  background-color: #FFF;
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  border: ${props => props.border};
  border-radius: ${props => props.bRadius}px;
  box-shadow: ${props => props.shadow};
`;