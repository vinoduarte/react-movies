import React from 'react';
import ReactDOM from 'react-dom/client';
import { SignUp } from './pages/SignUp';
import { Container } from './pages/SignUp/styles.js'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global.js'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
     <ThemeProvider theme={theme}>



         <Container>
          <GlobalStyles></GlobalStyles>
           <SignUp />
         </Container>



      </ThemeProvider>
   </React.StrictMode>

)
