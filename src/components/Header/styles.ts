import styled from "styled-components";

export const Container = styled.div`
.header {
  display: flex;
  justify-content: flex-start;
}

p {
    margin-top: -15px;
    margin-bottom: 59px;
    width: 120px;
    border-radius: 10px;
    font-weight: 900;
    font-size: 20px;
    color: #ec5c36;
    box-shadow: 14px 14px 16px #cbced1, -14px -14px 40px #e0dddd;
    text-align: center;
    display: -ms-flexbox;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    
  }
  
  ul {
    display: flex;
   }

   li {
    height: 21px;
    margin: 9px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
   }
   ul li {
    border-radius: 10px;
    color: #ec5c36;
    list-style-type: none;
    margin-top: -30px;
    box-shadow: 14px 14px 16px #cbced1, -14px -14px 40px white;
   }

  li:hover {
    color: #fff;
    font-size: 11px;
    box-shadow: none;
    background-color: #5984bd;
    width: 85px;
    height: 30px;
    font-size: 15px;
  }
  .input {
    margin-bottom: 52px;
    margin-top: -20px;
    color: #ec5c36;
    margin-right: -22px;
    margin-inline-start: auto;
    width: 14rem;
    background: #ecf0f3;
    padding: 15px;
    padding-left: 19px;
    height: 36px;
    font-size: 14px;
    border-radius: 13px;
    box-shadow: 
  }

`;