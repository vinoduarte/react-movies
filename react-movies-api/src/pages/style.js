import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: "header" "content";
  width: 100%;

  #tags {
    display: flex;
    gap: 8px;
  }
`

export default Container