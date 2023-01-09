import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

:root{
    --color-primary:          ##F9F41F;
    --color-secondary:        ##49BCF0;


    --grey-4:                 #333333;
    --grey-3:                 #828282;
    --grey-2:                 #868E96;
    --grey-1:                 #D9D9D9;
    --grey-0:                 #F8F9FA;


    --color-success:          #168821;
    --color-error:            #E60000;
    --color-warning:          #FFCD07;
    --color-Information:      #155BCB;
    
    /* font-size: 62.5%; */
}



*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;

}

html, body, #root, #root>div {
    height: 100%;
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
    font-family: "Inter", sans-serif;
}

    
`;
