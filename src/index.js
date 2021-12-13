import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle, theme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { UserContextWrapper } from './store/user-context';

ReactDOM.render(
   <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
         <UserContextWrapper>
            <App />
         </UserContextWrapper>
      </ThemeProvider>
   </>,
   document.getElementById('root')
);
