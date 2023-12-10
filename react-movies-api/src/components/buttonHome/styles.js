import styled from 'styled-components'

export const Container = styled.button`
width: 100%;
background-color: ${({ theme }) => theme.COLORS.PINK };

height: 48px;
border: 0;
padding: 0 16px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
gap: 2.5px;


&:disabled{
  opacity: 0.5;
}
`