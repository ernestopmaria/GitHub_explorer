import styled, { css } from 'styled-components';
import { shade } from 'polished';


interface FormProps {
    hasError: boolean
}


export const Title = styled.h1`
font-size:48px;
color:#3a3a3a;
line-height:56px;
margin-top:80px;
max-width:450px;
`;

export const Empty = styled.div`

margin:40px auto;

width:220px;
height:220px;
align-content:center;

h2{
    margin-left:35px;
}
            
`;

export const Form = styled.form<FormProps>`
margin-top:40px;
max-width:1000px;
display:flex;


input{
    padding:0 40px;
    border:0;
    border-radius:5px 0 0 5px;
    flex:1;
    height:70px;
    color:#3a3a3a;
    border:2px solid #fff;
    border-right:0;
    margin-bottom:30px;
   
   

    ${(props) => props.hasError && css`
    border-color:#c53030;
   
    
    `}
  

    &::placeholder{
        color:#a8a8b3;
    }
}

button{
    border-radius:0 5px 5px 0;
    height:70px;
    width:100px;
    border:0;
    background:rgb(214, 157, 251);
    color :rgb(96, 87, 103);
    font-weight:bolder;
    transition: background-color 0.4s;

    &:hover{
    
        background:${shade(0.01, '#605767')};
        color:#fff;
    }

}
`;

export const Error = styled.span`
display:block;
color:#c53030;
margin-top:8px;
flex:1;
margin-top:-20px;
margin-bottom:40px;
`;

export const TabPanels = styled.div`

    flex:1;
    margin-right:10px;
   

    a{
        background:#fff;
        border-radius:5px;
        width:100%;
        padding:24px;
        display:block;
        text-decoration:none;
        display:flex;
        align-items:center;
        transition:transform 0.2s;
        box-shadow: 2px 1px 5px 1px #888888;
        margin-top:10px;
 

        &:hover{
            transform:translateX(5px);
        }
        & + a {
            margin-top:20px;
        }

        img{
            width:64px;
            height:64px;
            border-radius:50%;
            margin-right:5px;
        }
        div{
        margin-left:16px;
        flex:1;

        strong{
            font-size:20px;
            color:rgb(96, 87, 103);
        }
        p, h6{
            font-size:18px;
            color:#A8A8B3;
            margin-top:4px;
        }
    }
    svg{
        margin:auto;
        color:rgb(214, 157, 251);
    }
    }


`;


export const No = styled.div`


margin: 40px auto ;

h6{
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 auto 0 auto;
}
`


