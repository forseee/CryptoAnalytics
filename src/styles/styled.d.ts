import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    colors: {
      white: string;
      primary: string;
      active: string;
      hover: string;
      background: {
        footer: string;
        header: string;
        main: string;
      };
    };

    button: {
      primery: {
        fontsSize: string;
        main: string;
        shadow: string;
        hover: string;
        disable: string;
      };
    };

    table: {
      color: {
        main: string;
        border: string;
        hover: string;
      };
    };

    selector: {
      primery: {
        fontsSize: string;
        main: string;
        shadow: string;
        hover: string;
        disable: string;
      };
    };

    fonts: {
      colors: {
        black: string;
        white: string;
        grey: string;
      };
      weight: {
        regular: string;
        medium: string;
        semiBold: string;
      };
      fontSize: {
        xs: string;
        small: string;
        medium: string;
        large: string;
      };
      lineHeight: {
        small: string;
        medium: string;
        large: string;
      };
    };

    line: {
      main: string;
    };

    media: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
