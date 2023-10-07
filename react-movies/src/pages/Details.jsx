import { Header } from '../components/header'
import { Buttons } from '../components/button'
import Container from './style.js'


export default function Details() {
  return (
    <Container>
     <Header></Header>
     <Buttons title="Cadastro" loading>
     </Buttons>
    </Container>
  )
}