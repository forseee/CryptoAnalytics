import { DefaultTheme } from "styled-components";
import { Dosis } from "@next/font/google";

const dosis = Dosis({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const defaultTheme: DefaultTheme = {
  fontFamily: dosis.style.fontFamily,
  colors: {
    white: "#ffffff",
    primary: "#08D899",
    active: "#7bbd77",
    hover: "#7bbd77",
    background: {
      footer: "#dfede5",
      header: "#dfede5",
      main: "#dfede5",
    },
  },
  table: {
    color: {
      main: "#000000",
      hover: "rgba(237, 192, 177, 0.1)",
      border: "#cdd2c8",
    },
  },
  button: {
    primery: {
      fontsSize: "14px",
      main: "rgb(77, 124, 36)",
      shadow: "rgb(204, 204, 204)",
      hover: "rgb(77, 124, 36)",
      disable: "#6c7589",
    },
  },
  selector: {
    primery: {
      fontsSize: "14px",
      main: "rgb(77, 124, 36)",
      shadow: "rgb(204, 204, 204)",
      hover: "rgb(77, 124, 36)",
      disable: "#6c7589",
    },
  },
  fonts: {
    colors: {
      black: "#000000",
      white: "#19191B",
      grey: "#676767",
    },
    weight: {
      regular: "400",
      medium: "500",
      semiBold: "600",
    },
    fontSize: {
      xs: "12px",
      small: "14px",
      medium: "16px",
      large: "18px",
    },
    lineHeight: {
      small: "1",
      medium: "1.25",
      large: "1.5",
    },
  },

  media: {
    desktop: "(max-width: 1025px)",
    tablet: "(max-width: 640px)",
    mobile: "(max-width: 360px)",
  },

  line: {
    main: "1px solid #d9d7d7",
  },
};
