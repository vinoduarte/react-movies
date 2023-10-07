import styled from 'styled-components'

const Container = styled.div`
  background-color: ${( { theme } ) => theme.COLORS.BACKGROUND_800};

  color: ${( { theme } ) => theme.COLORS.WHITE};
  display: grid;
  grid-template-rows: 116px auto;
  grid-area: "header" "content";
  width: 100%;
  height: 100vh;

`

export default Container