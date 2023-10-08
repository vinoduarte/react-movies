import styled from 'styled-components'

export const Container = styled.input`
width: 100%;
height: 56px;
border-radius: 10px;
border: none;
padding: 19px 24px;
background-color: ${({ theme } ) => theme.COLORS.BACKGROUND_600};
color: ${({ theme }) => theme.COLORS.GRAY};

`