import { Container } from '../header/styles.js'
import { Input } from '../Input'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título"/>
      <div className="Profile">
        <div id="text">
          <h1>Vinicius Duarte</h1>
          <a>sair</a>
        </div>
        <a><img src="https://github.com/vinoduarte.png"></img></a>
      </div>
    </Container>
  )
}