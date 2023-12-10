import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header" 
  "content";
  
   main {
     grid-area: content;
     overflow-y: scroll;
     padding: 40px 0;
  }
  
  ::-webkit-scrollbar {
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: ${({theme}) => theme.COLORS.PINK};
  height: 96.197px;
  border-radius: 8px;
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
