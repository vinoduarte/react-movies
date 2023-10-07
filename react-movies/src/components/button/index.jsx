import { Container } from './styles.js'

export function Buttons({ title, loading = false, ...rest }) {
  var title
  return (
    <Container 
     type="button" 
     disabled={loading}
    {...rest}
    >
      { loading ? 'Carregando...' : title }
    </Container>
  )
}