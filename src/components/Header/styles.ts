import styled from "styled-components";
import colors from "../../styles/colors";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 60px 0px;
  margin: auto;
  align-items: center;
  margin-left: 100px;

  .icons {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    text-decoration: none;
    
    &:visited {
      color: unset;
    }

    .logo-icon {
      img {
        width: 45px;
      }
    }

    .logo-text {
      font-size: 26px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin: auto;

    .logo {
      position: static;
      transform: none;
      margin-bottom: 16px;
    }
  }

  @media screen and (max-height: 815px) {
    padding: 25px 0;
  }
`;