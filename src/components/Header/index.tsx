import { StyledHeader } from "./styles";
import favicon from '../../assets/favicon.svg';
import linkedin from '../../assets/linkedin.svg';
import facebook from '../../assets/facebook.svg';
import discord from '../../assets/discord.svg';
import { Link } from "react-router-dom";

function Header() {
  return (
    <StyledHeader>
      <div className="icons">
        <a href=""><img src={linkedin} alt="Linkedin" /></a>
        <a href=""><img src={facebook} alt="Facebook" /></a>
        <a href=""><img src={discord} alt="Discord" /></a>
      </div>
      <Link className="logo" to="/">
        <div className="logo-icon">
          <img src={favicon} alt="Ballerini Devs" />
        </div>
        <div className="logo-text">Ballerini Devs</div>
      </Link>
    </StyledHeader>
  )
}

export default Header;