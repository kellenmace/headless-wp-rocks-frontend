import { createGlobalStyle } from "styled-components"
import styledNormalize from "styled-normalize"

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize}

  /**
   * Custom properties
   */
  :root {
    --font-family: 'Montserrat',-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen-Sans','Ubuntu','Cantarell','Helvetica Neue','Helvetica','Arial',sans-serif;
    --border-radius: 8px;
    --content-padding: 1rem;
    --content-max-width: 1200px;
    --content-max-width-narrow: 800px;
    --vertical-spacing: 6rem;

    /* Color palette #2 from Refactoring UI */
    --color-white: #fff;
    --color-gray-1: #102A43;
    --color-gray-2: #243B53;
    --color-gray-3: #334E68;
    --color-gray-4: #486581;
    --color-gray-5: #627D98;
    --color-gray-6: #829AB1;
    --color-gray-7: #9FB3C8;
    --color-gray-8: #BCCCDC;
    --color-gray-9: #D9E2EC;
    --color-gray-10: #F0F4F8;
    --color-blue-1: #003E6B;
    --color-blue-2: #0A558C;
    --color-blue-3: #0F609B;
    --color-blue-4: #186FAF;
    --color-blue-5: #2680C2;
    --color-blue-6: #4098D7;
    --color-blue-7: #62B0E8;
    --color-blue-8: #84C5F4;
    --color-blue-9: #B6E0FE;
    --color-blue-10: #DCEEFB;
    --color-yellow-1: #8D2B0B;
    --color-yellow-2: #B44D12;
    --color-yellow-3: #CB6E17;
    --color-yellow-4: #DE911D;
    --color-yellow-5: #F0B429;
    --color-yellow-6: #F7C948;
    --color-yellow-7: #FADB5F;
    --color-yellow-8: #FCE588;
    --color-yellow-9: #FFF3C4;
    --color-yellow-10: #FFFBEA;
    --color-cyan-1: #044E54;
    --color-cyan-2: #0A6C74;
    --color-cyan-3: #0E7C86;
    --color-cyan-4: #14919B;
    --color-cyan-5: #2CB1BC;
    --color-cyan-6: #38BEC9;
    --color-cyan-7: #54D1DB;
    --color-cyan-8: #87EAF2;
    --color-cyan-9: #BEF8FD;
    --color-cyan-10: #E0FCFF;
    --color-red-1: #610404;
    --color-red-2: #780A0A;
    --color-red-3: #911111;
    --color-red-4: #A61B1B;
    --color-red-5: #BA2525;
    --color-red-6: #D64545;
    --color-red-7: #E66A6A;
    --color-red-8: #F29B9B;
    --color-red-9: #FACDCD;
    --color-red-10: #FFEEEE;

    /* Box shadows from Material UI - https://material-ui.com/system/shadows/ */
    --box-shadow-1:  rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    --box-shadow-2:  rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    --box-shadow-3:  rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    --box-shadow-4:  rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
    --box-shadow-5:  rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px;
    --box-shadow-6:  rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
    --box-shadow-7:  rgba(0, 0, 0, 0.2) 0px 4px 5px -2px, rgba(0, 0, 0, 0.14) 0px 7px 10px 1px, rgba(0, 0, 0, 0.12) 0px 2px 16px 1px;
    --box-shadow-8:  rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
    --box-shadow-9:  rgba(0, 0, 0, 0.2) 0px 5px 6px -3px, rgba(0, 0, 0, 0.14) 0px 9px 12px 1px, rgba(0, 0, 0, 0.12) 0px 3px 16px 2px;
    --box-shadow-10: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px, rgba(0, 0, 0, 0.14) 0px 10px 14px 1px, rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
    --box-shadow-11: rgba(0, 0, 0, 0.2) 0px 6px 7px -4px, rgba(0, 0, 0, 0.14) 0px 11px 15px 1px, rgba(0, 0, 0, 0.12) 0px 4px 20px 3px;
    --box-shadow-12: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
    --box-shadow-13: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 13px 19px 2px, rgba(0, 0, 0, 0.12) 0px 5px 24px 4px;
    --box-shadow-14: rgba(0, 0, 0, 0.2) 0px 7px 9px -4px, rgba(0, 0, 0, 0.14) 0px 14px 21px 2px, rgba(0, 0, 0, 0.12) 0px 5px 26px 4px;
    --box-shadow-15: rgba(0, 0, 0, 0.2) 0px 8px 9px -5px, rgba(0, 0, 0, 0.14) 0px 15px 22px 2px, rgba(0, 0, 0, 0.12) 0px 6px 28px 5px;
  }

  /**
   * Global styles
   */
  html {
    box-sizing: border-box;
    font-family: var(--font-family);
    color: var(--color-gray-2);
    line-height: 1.8;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    @media (min-width: 500px) {
      font-size: 1.14rem;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: var(--color-gray-10);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1 {
    font-size: 2.1rem;
    line-height: 1.2;
  }
  h2 {
    font-size: 1.7rem;
    line-height: 1.3;
  }
  h3 {
    font-size: 1.5rem;
    line-height: 1.4;
  }
  h4 {
    font-size: 1.3rem;
    line-height: 1.5;
  }
  h5 {
    font-size: 1rem;
    line-height: 1.6;
  }
  h6 {
    font-size: 0.8rem;
    line-height: 1.7;
  }
  p {

  }
  a {
    color: var(--color-gray-2);
    font-weight: 600;

    /**
     * Fallback
     * https://caniuse.com/#search=text-decoration-thickness
     */
    text-decoration: none;
    background-image: linear-gradient(180deg, transparent 25%, var(--color-blue-9) 0);
    background-position: 0 1.04em;
    background-repeat: repeat-x;
    background-size: 8px 5px;
    &:hover, &:active {
      background-image: linear-gradient(180deg, transparent 25%, var(--color-blue-8) 0);
    }

    /* https://css-tricks.com/styling-links-with-real-underlines/ */
    @supports (text-decoration-thickness: .125em) {
      background: none;
      text-decoration: underline;
      text-decoration-color: var(--color-blue-9);
      text-decoration-thickness: .125em;
      text-underline-offset: 1.5px;
      &:hover, &:active {
        background-image: none;
        text-decoration-color: var(--color-blue-8);
      }
    }
  }
  blockquote {
    position: relative;
    font-style: italic;
  }
  blockquote:after {
    content: "〞";
    position: absolute;
    top: 0.4em;
    left: -0.4em;
    color: rgba(217, 226, 236, 0.5);
    font-size: 6em;
    z-index: -1;
    line-height: 0;
  }
  table {
    box-shadow: var(--box-shadow-10);
    border-radius: var(--border-radius);
    border-collapse: collapse;
    overflow: hidden;
    tr:first-of-type {
      background-color: var(--color-gray-10);
    }
    tr:not(:first-of-type) {
      border-bottom: 1px solid var(--color-gray-10);
    }
  }
  th, td {
    padding: 10px;
  }
  code, pre {
    font-family: monospace, monospace;
  }
  form {
    color: var(--color-gray-2);
  }
  ::selection {
    background: var(--color-yellow-7);
  }
  ::placeholder {
    color: var(--color-gray-6);
  }
  input,
  select,
  textarea,
  button {
    border: none;
    &:focus {
      /* Replace browser's outline with a box-shadow that respects border-radius. */
      outline: none;
      box-shadow: 0 0 0 2px var(--color-blue-9);
    }
  }
  input[type="text"],
  input[type="email"] {
    border-radius: var(--border-radius);
    padding: 14px 18px;
    color: var(--color-gray-2);
  }
  button {
    border: none;
    border-radius: var(--border-radius);
    padding: 14px 18px;
    background-color: var(--color-yellow-6);
    color: var(--color-yellow-3);
    cursor: pointer;
    &:hover, &:active {
      color: var(--color-yellow-2);
    }
  }
  .screen-reader {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
`
