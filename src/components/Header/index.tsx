import { StyledHeader } from "./styles";
import favicon from '../../assets/favicon.svg';
import linkedin from '../../assets/linkedin.svg';
import facebook from '../../assets/facebook.svg';
import discord from '../../assets/discord.svg';

function Header() {
  return (
    <StyledHeader>
      <div className="icons">
      <a href=""><img src={linkedin} alt="Linkedin" /></a>
      <a href=""><img src={facebook} alt="Facebook" /></a>
      <a href=""><img src={discord} alt="Discord" /></a>
      </div>
      <div className="logo">
        <div className="logo-icon">
          <img src={favicon} alt="Ballerini Devs" />
        </div>
        <div className="logo-text">Ballerini Devs</div>
      </div>
    </StyledHeader>
  )
}

export default Header;