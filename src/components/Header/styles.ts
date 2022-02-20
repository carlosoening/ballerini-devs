import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 60px 16px;
  max-width: 1200px;
  position: relative;
  margin: auto;
  align-items: center;

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

    .logo {
      position: static;
      transform: none;
      margin-bottom: 16px;
    }
  }
`;