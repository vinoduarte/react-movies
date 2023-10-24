import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: "header" "content";
  width: 100%;

  > main {
    grid-area: content;
    margin: 40px 0;
    overflow-y: scroll;
    height: 581px;
  }

  content {
    margin: auto;
  }
  #tags {
    display: flex;
    gap: 8px;
  }

  #text {
    font-size: 16px;
  }
`
export const Content = styled.div`
max-width: 1113px;
margin: 0 auto;

display: flex;
flex-direction: column;
`
