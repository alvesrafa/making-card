import styled from "styled-components";

export const ConfigMenuWrapper = styled.div`
  width: 30vw;
  height: 100vh;
  background-color: #424242;
  color: #f5f5f5;
  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: justify;
  margin-top: 8px;

  .input-block {
    margin: 7px;
    display: flex;
    flex-direction: column;
  }

  .input-block input {
    border: 0;
    border-radius: 4px;
    height: 35px;
    padding: 5px;
    width: 70px;
    line-height: 40px;
    font-size: 15px;
    margin-right: 5px;
  }
`;
