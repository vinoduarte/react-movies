import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  main {
    grid-area: content;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    height: 96.197px;
    border-radius: 8px;
  }
`;

export const Content = styled.div`
  margin: 50px 123px;

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  #moviesHeader {
    display: flex;
    justify-content: space-between;
    margin-bottom: 38px;
  }

  #HomeButton {
    width: 207px;
  }
`;
