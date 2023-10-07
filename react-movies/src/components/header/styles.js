import styled from 'styled-components'

export const Container = styled.header`

background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
border-bottom-style: solid;
border-bottom-width: 1px;
border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
height: 116px;
display: flex;
justify-content: space-between;
padding: 0 80px;
background: red;
`