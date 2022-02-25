import { css } from "styled-components";

export const Mobile380 = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
