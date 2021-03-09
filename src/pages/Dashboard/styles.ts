import styled from 'styled-components';
import {shade} from 'polished';

export const Title = styled.h1`
font-size:48px;
color:#3a3a3a;
line-height:56px;
margin-top:80px;
max-width:450px;
`;

export const Form = styled.form`
margin-top:40px;
max-width:900px;
display:flex;


input{
    padding:0 40px;
    border:0;
    border-radius:5px 0 0 5px;
    flex:1;
    height:70px;
    color:#3a3a3a;
  

    &::placeholder{
        color:#a8a8b3;
    }
}

button{
    border-radius:0 5px 5px 0;
    height:70px;
    width:150px;
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

export const Users = styled.div`
margin-top:50px;
max-width:900px;
flex:1;
justify-content:space-between;
display:flex;

h1{
    font-size:25px;
    color:#3a3a3a;
    margin-bottom:12px;
}


.users{
    flex:1;
    margin-right:10px;

    button{
        background:transparent;
        width:100%;
        border:0;
        margin-bottom:5px;
        font-size:25px;
        border-bottom: 4px solid rgb(214, 157, 251);
       
    }

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
 

        &:hover{
            transform:translateX(5px);
        }
        & + a {
            margin-top:16px;
        }

        img{
            width:64px;
            height:64px;
            border-radius:50%;
            margin-right:5px;
        }
        div{
        margin-left:16px;

        strong{
            font-size:20px;
            color:rgb(96, 87, 103);
        }
        p{
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
}

.companies{
    flex:1;
    margin-left:10px;

    button{
        background:transparent;
        width:100%;
        border:0;
        margin-bottom:5px;
        font-size:25px;
        border-bottom: 4px solid rgb(214, 157, 251);
       
    }
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

    
    &:hover{
          transform:translateX(5px);
        }

        & + a {
            margin-top:16px;
        }

    img{
        width:64px;
        height:64px;
        border-radius:50%;
    }
    div{
        margin-left:16px;

        strong{
            font-size:20px;
            color:rgb(96, 87, 103);
        }
        p{
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
}

`;