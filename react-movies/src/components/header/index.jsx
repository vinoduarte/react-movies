import { Container } from '../header/styles.js'
import { Input } from '../Input'

export function Header(placeholder) {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="teste"></Input>
      <div className="Profile">
        <div id="text">
          <h1>Vinicius Duarte</h1>
          <a>sair</a>
        </div>
        <img src="https://github.com/vinoduarte.png"></img>
      </div>
    </Container>
  )
}