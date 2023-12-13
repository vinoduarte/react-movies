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
     overflow-y: auto;
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
    margin: 40px 0 40px 0;
  }
  
  #text {
    font-size: 16px;
  }
  
  .detailsTag {
    display: flex;
    height: 14px;
    padding: 16px;
    font-size: 12px;
    align-items: center;
  }
`
export const Content = styled.div`
max-width: 1113px;
margin: 0 auto;
display: flex;
flex-direction: column;
`
