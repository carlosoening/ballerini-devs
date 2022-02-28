import styled from "styled-components";
import colors from "../../styles/colors";

interface Props {
  backgroundColor?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  color?: string;
}

export const Button = styled.button<Props>`
  height: ${props => props.height || '58px'};
  width: ${props => props.width || '241px'};
  background-color: ${props => props.backgroundColor || colors.green};
  color: ${props => props.color || colors.white};
  font-family: Overpass;
  font-size: ${props => props.fontSize || '24px'};
  border-radius: 50px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:disabled {
    cursor: initial;
    opacity: 0.8;
  }
`; 