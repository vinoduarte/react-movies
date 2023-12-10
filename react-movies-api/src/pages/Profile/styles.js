import styled from "styled-components";

export const Container = styled.div`

background-color: ${( { theme } ) => theme.COLORS.BACKGROUND_500};
width: 100%;

display: grid;
grid-template-areas: "header" "content";
grid-template-rows: 144px auto;


header {
  grid-area: "header";
  position: relative;

  .return {
    width: fit-content;
    height: fit-content;
    margin-top: 64px;
    padding-left: 25px;
    position: absolute;
  }


  .imgDiv {
    left: 50%;
    transform: translate(-50%);
    width: fit-content;
    position: relative;
    padding-top: 50px;
    display: flex;
  }


  img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }
  
  .camera {
    background-color: ${( { theme } ) => theme.COLORS.PINK};
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;

    svg {
      width: 50px;
      color: black;
    }
  }
}


main {
  grid-area: "content";
  width: 340px;
  margin: auto;
  margin-top: 157px;
}

`

export const Content = styled.div`
width: 100%;

.profileInfos {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  

  .secondInput {
    padding-bottom: 16px;
  }
}

`