import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import * as C from './styles';
import { Link } from 'react-router-dom';

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
                  <Link to={'Cadastro de funcionários'}><li>Funcionários</li></Link>
                  <Link to={'Cadastro de documantos'}><li>Documentos</li></Link>
                  <Link to={'Setor ADM'}><li>Administrativo</li></Link>
                </ul>
        </C.Container>
  
      );
}