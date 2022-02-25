import styled from "styled-components";
import colors from "../../styles/colors";

export const Button = styled.button`
  height: 58px;
  width: 241px;
  background-color: ${colors.green};
  color: ${colors.white};
  font-family: Overpass;
  font-size: 24px;
  border-radius: 50px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`; 