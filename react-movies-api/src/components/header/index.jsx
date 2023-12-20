import { Container } from '../header/styles.js'
import { Input } from '../Input'
import { Link } from 'react-router-dom'
import { useAuth } from "../../hooks/auth"
import { api } from '../../services/api.js'

export function Header() {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título"/>
      <div className="Profile">
        <div id="text">
          <h1>{user.name}</h1>
          <a onClick={signOut}>sair</a>
        </div>
        <Link to="profile"><img src={avatarUrl}></img></Link>
      </div>
    </Container>
  )
}