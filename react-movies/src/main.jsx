import React from 'react'
import ReactDOM from 'react-dom/client'
import Details from './pages/Details.jsx'
import Container from './pages/style.js'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global.js'


ReactDOM.createRoot(document.getElementById('root')).render(

   <React.StrictMode>

      <ThemeProvider theme={ theme }>

        <GlobalStyles>

         <Container>
           <Details />
           <h1>
            TESTE
           </h1>
         </Container>

        </GlobalStyles>

      </ThemeProvider>

   </React.StrictMode>

)
