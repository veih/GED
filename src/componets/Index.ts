
import styled from 'styled-components';

export const Index = styled.div`
  p {
      margin-top: 2rem;
      font-weight: 900;
      font-size: 1.8rem;
      color: #1DA1F2;
      letter-spacing: 1px;
  }

  .brand-logo {
    margin: auto;
    height: 100px;
    width: 100px;
    background: url("");
    margin-bottom: 25px;
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;
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

  a {
    background-color: #ecf0f3;
    text-decoration: none;
    margin-top: 20px;
    height: 40px;
    border-radius: 20px;
    
  }

  button {
    font-size: 10px;
    margin: 5px;
    display: inline;
    width: 75px;
    margin-top: 20px;
    background: #1DA1F2;
    height: 35px;
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



