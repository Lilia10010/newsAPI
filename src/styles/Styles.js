import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

    html{
        background: var(--gray);
    }
    
    :root {
        --primary: #3688D3;
        --gray: #E5E5E5;
        --white: #f8f8f8;
        --titles: #363F5F;
        --secondary: #969CB2;
  }

  body{
      font: 400 1.6rem Poppins;
  } 
`;