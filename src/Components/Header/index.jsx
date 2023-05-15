import { StyledHeader } from "./style";
import Logo from "../../assets/LogoHeader.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const Header = () => {
  useEffect(() => {
    toast.success("Login feito com sucesso");
  }, []);
  return (
    <StyledHeader>
      <div>
        <img src={Logo} alt="Kenzie Hub" />
        <Link to={"/"}>Sair</Link>
      </div>
    </StyledHeader>
  );
};
