import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  fontSize?: string;
}

export const Input = styled.input<Props>`
  width: ${p => p.width || "275px"};
  height: ${p => p.height || "45px"};
  border: none;
  font-size: ${p => p.fontSize || "20px"};
  font-weight: 600;
  color: #777777;
  font-family: Overpass;
  padding: 0 8px;
  border-radius: 10px;
  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`;