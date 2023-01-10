import {StyledHeader, StyledButton} from "../style";
import { goToHome, goToProfile, goToLogin } from "./routes/coordinator";
import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledButton onClick={() => goToHome(navigate)} >
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => goToProfile(navigate, "name")} >
        Ir para página de perfil
      </StyledButton>
      <StyledButton onClick={() => goToLogin(navigate)} >
        Ir para página de login
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
