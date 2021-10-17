import { css } from 'styled-components';

const CustomStyles = css`
  body {
    background-color: ${({ theme: { colors } }) => colors.background};
    color: ${({ theme: { colors } }) => colors.text};
    font-family: ${({ theme: { fonts } }) => fonts.poppins};
    font-size: 16px;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';

    strong {
      font-weight: bold;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme: { fonts } }) => fonts.poppins};
    color: ${({ theme: { colors } }) => colors.primary};
  }

  a {
    color: ${({ theme: { colors } }) => colors.primary};
    text-underline-offset: 0.05em;
  }

  a:focus {
    outline: 2px solid transparent;
  }

  :is(a, button, input, textarea):focus {
    outline: max(2px, 0.08em) solid currentColor;
    outline-offset: max(2px, 0.08em);
  }

  :is(a, button, input, textarea):focus:not(:focus-visible) {
    outline: none;
  }

  :is(a, button, input, textarea):focus-visible {
    outline: max(2px, 0.08em) solid currentColor;
    outline-offset: max(2px, 0.08em);
  }

  svg {
    fill: currentColor;
    display: block;
  }

  h1 {
    font-size: clamp(2.5rem, 1rem + 5vw, 4rem);
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.3rem;
  }

  code {
    background-color: ${({ theme: { colors } }) => colors.codeBackground};
    border-radius: 3px;
    font-family: ${({ theme: { fonts } }) => fonts.code};
    font-family: 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono',
      Menlo, Courier, monospace;
    font-size: 2.45ex;
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  }
`;

export default CustomStyles;
