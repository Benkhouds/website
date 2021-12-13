import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
   padding: 0;
   margin: 0;
   font-family:sans-serif;
}
* {
   box-sizing: border-box;
}
a {
   color: inherit;
   text-decoration: none;
}
`;

const theme = {
   colors: {
      primary: '#F2F2F2',
      dark: '#222222',
      gray: '#707070',
      brown: '#A88C6A',
   },
};

export { GlobalStyle, theme };
