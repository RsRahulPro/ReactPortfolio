import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`


    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    body{
        background-color: #1b1b1b;
        font-family: 'Inter', sans-serif;
    }
    button{
        font-weight: bold;
        font-size: 1.1.rem;
        background: transparent;
        cursor: pointer;
        border:3px solid #23d997;
        color:white;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        padding: 0.5rem 0.8rem;
        &:hover{
            background-color:#23d997;
            color: white;
        }
    }
    h2{
            font-weight:lighter;
            font-size: 3rem;

    }
    h4{
        font-weight:bold;
        font-size: 2rem;
    }
    span{
        font-weight:bold;
        color: #23d997;
    }
    h3{
            color: white;
    }
    p{
            padding: 3rem 0rem;
            color:#ccc;
            font-size:1.4rem;
            line-height: 150%;
    }
    a{
        font-size :1.1rem;
    }
    ::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px none #ffffff;
  border-radius: 82px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 15px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
`;

export default GlobalStyle;
