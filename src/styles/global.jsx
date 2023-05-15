import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

:root{

    --color-background: #000000;
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-gray-0: #F8F9FA;
    --color-gray-1: #868E96;
    --color-gray-2: #343B41;
    --color-gray-3: #212529;
    --color-gray-4: #121214;
    --color-success: #3FE864;
    --color-negative: #E83F5B;  
    --color-opacity : #12121480;

}

* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  #root{
    height: 100vh;
  }
  body, html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-background);
     
  }
  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }


`;
