import styled, { createGlobalStyle } from "styled-components";

export const BaseLine = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  :root {
    --blue: #5964e0;
    --light-blue: #6670e3;
    --gray: #f5f6f8;
    --offwhite: #d1d1d1;
    --white: #ffffff;
    --dark: #131722;
    --light-dark: #18202D;
    --red: #e14c21;
    --green: #38c791;
    --shadow: rgba(0, 0, 0, 0.5)
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(${props => props.theme ? "--dark" : "--gray"});
    font-family: 'Poppins', sans-serif;
    transition: background-color .5s linear;
  }

  ul {
    list-style: none;
  }

  a: {
    text-decoration: none;
  }
`

export const AppContainer = styled.main`  
`
export const Body = styled.main`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100vw;
  min-height: 70vh;
  margin-top: 3rem;
`