import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        "050": string;
        500: string;
        300: string;
      };

      neutral: {
        "050": string;
        900: string;
        400: string;
        600: string;
      };
    };
  }
}

export const theme = {
  colors: {
    primary: {
      "050": "#FFE8D9",
      500: "#F35627",
      300: "#FF9466",
    },

    neutral: {
      "050": "#F7F7F7",
      900: "#222222",
      400: "#9E9E9E",
      600: "#626262",
    },
  },
};
