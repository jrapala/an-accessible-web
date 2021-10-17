import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      codeBackground: string;
      primary: string;
      text: string;
    };
    fonts: {
      assistant: string;
      poppins: string;
      code: string;
    }
  }
}