
import styled from 'styled-components';

export const CadDoc = styled.div`


.container {
  margin: auto;
  display: inline-table;
  position: relative;
  width: 100vh;
  height: 80vh;
  border-radius: 20px;
  padding: 40px;
  
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
}

  p {
      margin-top: 2rem;
      font-weight: 900;
      font-size: 1.8rem;
      color: #1DA1F2;
      letter-spacing: 1px;
  }

  .brand-title {
      margin-top: 2px;
      font-weight: 900;
      font-size: 1.8rem;
      color: #1DA1F2;
      letter-spacing: 1px;
  }
  .brand-title p {
      margin: 0;
  }

  label, input, button {
    display: block;
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  label {
    margin-bottom: 4px;
  }

  label:nth-of-type(2) {
    margin-top: 12px;
  }

  input::placeholder {
    color: gray;
  }

  input {
    background: #ecf0f3;
    padding: 10px;
    padding-left: 20px;
    height: 50px;
    font-size: 14px;
    border-radius: 13px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  }

  input:hover {
    box-sizing: border-box;
    box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;
  }

  button {
    font-size: 10px;
    margin-left: -4px;
    display: inline;
    width: 80px;
    margin-top: 20px;
    background: #1DA1F2;
    height: 40px;
    border-radius: 13px;
    cursor: pointer;
    font-weight: 900;
    box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
    transition: 0.5s;
  }
  
  button:hover {
    box-shadow: none;
    background-color: #5984bd;
  }

`;



