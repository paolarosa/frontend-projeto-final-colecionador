import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

button{
    cursor: pointer;
    border: none;
    background: transparent;
}

a{
    color: unset;
    text-decoration: none;
}

ul, ol, li{
    list-style: none;
}

h1, h2, h3, h4, h5, h6, p, a, span, li, button, label, input{
    font-family: 'IM Fell DW Pica', serif;
}
    
`;
