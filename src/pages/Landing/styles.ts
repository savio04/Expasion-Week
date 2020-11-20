import styled, {css} from 'styled-components'

interface PropsBalon{
    hasShow: boolean
}


export const Header = styled.header`
    height: 180px;
    width: 100%;
    background-color: #EE82EE;
    color: #FFF;
    display: flex;
    justify-content: center;
    

    div{
        display: flex;
        width: 900px;
        justify-content: space-between;
        margin-top:35px;

        h1{
            max-width: 460px;
            margin-left: 8px;
        }
        a{
            text-decoration: none;
            color: #FFF;
            margin-right: 8px;
            display: flex;
            justify-content: center;
            transition: transform 0.2s;
            font-size: 18px;

            &:hover{
                transform: translateX(5px)
            }

            svg{
                margin-left: 5px;
            }
        }
    }
    @media(max-width: 700px){
        div{
            justify-content: center;
            h1{
                font-size: 28px;
            }
            a{
                display: none;
            }
        }
    }

`;

export const Div = styled.div`
 
    max-width: 900px;
    border-radius: 5px;
    margin-top: -40px;
    background-color: #FFF;
    padding-left: 24px;
    padding-right: 24px;

    div{
        margin-top: 20px;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #696969;
        color: #696969;


        && + div{
            border-bottom: 0;
            padding-bottom:0;
        }
        
        iframe{
            margin-top: 20px;
            margin-left: 146px;
        }
    }

    img{
        width: 400px;
        margin-top: 20px;
    }

    p{
        margin-top: 15px;
        font-size: 18px;
    }

    @media(max-width: 900px){
        .iframe{
            display: none;
        }
        p{
            font-size:16px;
        }
        h2{
            font-size: 20px;
        }
    }

`;

export const Button = styled.button`
    position: fixed;
    height: 60px;
    width: 60px;
    outline: 0;
    border-radius: 50%;
    background-color: #EE82EE;
    border: none;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover{
        transform: translateY(-5px)
    }

    @media(max-width: 1100px){
        &{
            display: none;
        }
    }
`;

export const Balão = styled.div<PropsBalon>`
    position: fixed;
    opacity: 0;
    bottom: 80px;
    right: 70px;
    width:120px;
    height: 60px;
    background-color: #EE82EE;
    border-radius: 0px 30px 0 30px;
    transition: 0.4s;

    ${(props) => props.hasShow && css`
        opacity: 1;
    `}

    ul{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    li{
        padding: 5px;
        transition: transform 0.2s;            
        &:hover{
            transform: translateY(-5px)
        }
    }
`;
