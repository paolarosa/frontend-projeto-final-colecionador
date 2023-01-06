import styled, { css } from "styled-components";

const typeTheme = {
  colors: {
    primary: "#F9F41F",
    secundary: "#49BCF0",

    grey4: "#333333",
    grey3: "#828282",
    grey2: "#868E96",
    grey1: "#D9D9D9",
    grey0: "#F8F9FA",

    white: "#ffffff",
    black: "#000000",

    colorSucess: "#168821",
    colorNegative: "#E60000",
    colorWarning: "#FFCD07",
    colorInformation: "#155BCB",
    },
    
  sizes: {
      heading1: "4rem",
      heading2: "3.2rem",
      heading3: "2.4rem",
      headline: "1.6rem",
      body: "1.2rem",
      caption: "1rem",
  },
};

export type HeadingProps = {
  color?: keyof typeof typeTheme.colors;
  size?: keyof typeof typeTheme.sizes;
  fontWeight?: 100 | 400 | 700;
  lineHeight?: string | number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading = styled("h1").attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({
    color = "black",
    size = "headline",
    fontWeight = "700",
    lineHeight = "1.5",
  }) => css`
    font-size: ${typeTheme.sizes[size]};
    color: ${typeTheme.colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `}
`;

{
  /* <Heading level={1} fontWeight={100} lineHeight={4} color="gray" size="xlarge">Exemplo</Heading> */
}
