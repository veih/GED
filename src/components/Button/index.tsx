import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { StyleButao } from "./style";

export const Butao = () => {

    const auth = useContext(AuthContext);

  const handleLogout = () => {
    auth.signout();
    window.location.href = window.location.href;
  }
    return (
      <StyleButao>
 
        {auth.user && <button onClick={handleLogout}>Sair</button>}

      </StyleButao>
        
    
    );
}