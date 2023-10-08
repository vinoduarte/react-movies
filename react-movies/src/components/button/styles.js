import styled from 'styled-components'

export const Container = styled.button`
width: 100%;
background-color: ${({ theme }) => theme.COLORS.PINK };

height: 48px;
border: 0;
padding: 0 16px;
border-radius: 10px;
margin-top: 10px;

&:disabled{
  opacity: 0.5;
}
`