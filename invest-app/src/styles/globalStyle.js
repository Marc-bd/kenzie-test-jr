import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    
    *{
        
        box-sizing: border-box;
        outline: 0;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: var(--black)
        
        
    }
    
    body{
        background-color: var(--background)

    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration:none
    }

    li {
        list-style: none;
    }

    :root {
        --background: #f5f7fa;
        --blueclear: #76abee;
        --blue: #739ccd;
        --lightblue: #e8f0f8;
        --border: #d7e1e7;
        --lightgrey: #f7f9fa;
        --white: #ffff;
        --grey: #dedede;
        --black: #717171;
        --red:#ff3333
    }



`;
