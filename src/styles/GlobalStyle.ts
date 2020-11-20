import { createGlobalStyle } from 'styled-components'
// import backImg from '../assets/back.svg'

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background:  center #F0F0F7 ;
        font-family: 'Roboto', sans-serif;
    }
    #root{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;