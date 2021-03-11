import styled from 'styled-components';


export const Title = styled.h1`
flex:1;
font-size:18px;
color:#3a3a3a;
line-height:24px;
margin-top:80px;
max-width:700px;
margin-left:50px;
margin-bottom:30px;
`;


export const Header = styled.header`
display:flex;
align-items:center;
justify-content:space-between;

    a{
        display:flex;
        align-items:center;
        text-decoration:none;
        color:#a8a8b3;
        transition: color 0.2s;

        &:hover{
            color:#666;
        }

        svg{
            margin-right:4px;
        }
    }
`;

export const UserInfo = styled.section`
margin-top:80px;

    header{
    margin-top:80px;
    display:flex;
    align-items:center;
    }
    img{
        width:120px;
        height:120px;
        border-radius:50%;
    }

    div{
        margin-left:24px;

        strong{
            font-size:36px;
            color:#3d3d4d
        }

        p{
            font-size:18px;
            color:#737380;
            margin-top:4px;
        }
        h5{
            
            font-size:15px;
            color:#737380;
            margin-top:4px;
        }
    }

    ul{
        display:flex;
        list-style:none;
        margin-top:40px;
       
        

        li{
        

          
          &+li{
              margin-left:80px;
          }

            strong{
                display:flex;
                font-size:26px;
                color:#3d3d4d;
                width:60px;
                height:60px;
                background:rgb(214, 157, 251);
                border-radius:50%;
                justify-content:center;
                align-items:center;
            }
            span{
                display:block;
                margin-top:4px;
                color:#6c6c80;
            }
        }

    }
 `;

export const Repositories = styled.div`

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

    div{
    margin-left:16px;
    flex:1;

    strong{
        font-size:20px;
        color:rgb(96, 87, 103);
    }
    p ,svg{
        
        align-items:center;
        font-size:18px;
        color:#A8A8B3;
        margin-top:4px;
        justify-content:center;
        align-items:center;
       
    }
}
svg{
    margin:auto;
    color:#A8A8B3;
    
}
}




`;