import styled from 'styled-components'

const Container = styled.div`
h1 {
  background-color: ${( { theme } ) => theme.COLORS.PINK};

  color: ${( { theme } ) => theme.COLORS.WHITE}
}
`

export default Container