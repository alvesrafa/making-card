import styled from "styled-components";

export const CardStyle = styled.div<{
  width: string | number;
  height: string | number;
  border: string | number;
  bRadius: string | number;
  shadow: string | number;
}>`
  overflow: hidden;

  background-color: #fff;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 10px 0;

  border: ${(props) => props.border};
  border-radius: ${(props) => props.bRadius}px;
  box-shadow: ${(props) => props.shadow};

  .card-header {
    text-align: center;
    margin: 5px;
  }
  .card-body {
    padding: 7px;
    height: 60%;
  }
  .card-footer {
    text-align: center;
    margin: 5px;
  }
`;
