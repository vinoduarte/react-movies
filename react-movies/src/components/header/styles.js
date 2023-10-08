import styled from 'styled-components'

export const Container = styled.header`

background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
border-bottom-style: solid;
border-bottom-width: 1px;
border-bottom-color: ${({theme}) => theme.COLORS.GRAY};
height: 116px;
display: flex;
justify-content: space-between;
padding: 30px 123px;
gap: 64px;

#text {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}

#text a {
  color: ${({theme}) => theme.COLORS.BACKGROUND_700}
}

#text h1 {
  font-size: 14px;
  color: white;
  white-space: nowrap;
}

.Profile {
  width: 200px;
  height: auto;
  display: flex;
  align-items: center;
  gap: 10px
}

img {
  height: 64px;
  border-radius: 50%;
}
`