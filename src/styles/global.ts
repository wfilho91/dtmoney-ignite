import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #F0F2F5;
    --red: #E52e54;
    --blue: #5429CC;
    --green: #33CC95;
    --blue-light: #6933FF;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #FFFFFF
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width:1080px){
      font-size:93.75%; //15px
    }

    @media (max-width:720px){
      font-size:87.5%; //14px
    }

  }

  body{
    background: var(--background);
    -webkit-font-smoothing:antialiased;
  }

  body,input,textarea,button{
    font-family:'Poppins',sans-serif;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity:0.6;
    cursor: not-allowed;
  }

`
