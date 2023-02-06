import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: ${({ theme }) => theme.colors.background};
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.constants.typography.font.primary};
     }
`;

export default GlobalStyle;
