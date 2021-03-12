import { createGlobalStyle } from 'styled-components';
import githubbackground from '../assets/images/github-background.svg'

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}

body{
    background:#f0f0f5 url(${githubbackground}) no-repeat 70% top;
    -webkit-font-smoothing:antialiased
}

body, input,button {
    font: 16px Roboto , sans-serif;
}

#root{
    max-width:1000px;
    margin :0 auto;
    padding: 40px 40px;

}
button{
    cursor: pointer;
}

`;