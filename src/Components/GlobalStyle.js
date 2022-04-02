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
            font-size: 4rem;

    }
    h4{
        font-weight:bold;
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
`;

export default GlobalStyle;
