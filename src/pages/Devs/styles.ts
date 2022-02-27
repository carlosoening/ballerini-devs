import styled from "styled-components";
import colors from "../../styles/colors";

export const StyledDevs = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 146px);
  flex-wrap: wrap;

  @media screen and (max-width: 696px) {
    margin-top: 80px;
  }

`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: flex-end;
  gap: 20px;
  top: 50px;
  right: 80px;

  @media screen and (max-width: 1050px) {
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    top: 170px;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${colors.white};
  padding: 0 10px;
`;

export const SearchInput = styled.input`
  width: 275px;
  height: 45px;
  border: none;
  font-size: 20px;
  font-weight: 600;
  color: #999999;
  font-family: Overpass;
  padding: 0 8px;
  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`;