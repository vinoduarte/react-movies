import { Container } from '../header/styles.js'
import { Input } from '../Input'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título"/>
      <Link to="profile" className="Profile">
        <div id="text">
          <h1>Vinicius Duarte</h1>
          <a>sair</a>
        </div>
        <a><img src="https://github.com/vinoduarte.png"></img></a>
      </Link>
    </Container>
  )
}