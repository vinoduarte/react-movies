import { Container, Content } from './styles'
import { MovieOption } from '../../components/MovieOption'

import { Header } from '../../components/header'
import { ButtonHome } from '../../components/buttonHome'


export function Home() {
  return (
    <Container>
      <Header></Header>
      <main>
      <Content>
        <div id="moviesHeader">
          <h1>Meus filmes</h1>
          <ButtonHome id="HomeButton" title="Adicionar filme">
          </ButtonHome>
        </div>
        <MovieOption/>
        <MovieOption/>
        <MovieOption/>
        <MovieOption/>
        <MovieOption/>
        <MovieOption/>
      </Content>
      </main>      
    </Container>
  )
}