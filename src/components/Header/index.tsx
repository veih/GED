import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import * as C from './styles';

export const Header = () => {
    const auth = useContext(AuthContext);

    const handleLogout = () => {
      auth.signout();
      window.location.href = window.location.href;
    }
      return (
       <C.Container>
            {auth.user && <button onClick={handleLogout}>Sair</button>}
            <ul>
              <li>Arquivos</li>
              <li>Arquivos</li>
              <li>Arquivos</li>
            </ul>
            <h1>Cadastro de Desenvolvedor</h1>
            <p>Faça seu cadastro na lista e receba um emprego instantaneamente.</p>
        </C.Container>
  
      );
}