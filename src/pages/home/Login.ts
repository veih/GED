
import styled from 'styled-components';

export const Login = styled.div`
body {
margin-right: auto;
margin-left: auto;
height: 100vh;
background: #ecf0f3;
display: flex;
text-align: center;
justify-content: center;
place-items: center;
}

.container {
  margin: 2rem;
  display: inline-table;
  position: relative;
  width: 350px;
  height: 470px;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
}

  p {
      margin-top: 2rem;
      font-weight: 900;
      font-size: 25px;
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
    margin-right: 6px;
    font-size: 9px;
    margin-left: 6px;
    display: inline;
    width: 70px;
    margin-top: 45px;
    background: #1DA1F2;
    height: 35px;
    border-radius: 13px;
    cursor: pointer;
    font-weight: 900;
    box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
    transition: 0.5s;
  }
  
  button:hover {
    font-size: 11px;
    box-shadow: none;
    background-color: #5984bd;
    width: 85px;
    height: 50px;
  }

`;



