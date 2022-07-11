import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html,
    body,
    body > div:first-child,
    div#__next,
    div#__next > div {
        color: ${({ theme }) => theme.colors.primary};
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        white-space: pre-wrap;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
    }
`

export default GlobalStyle;