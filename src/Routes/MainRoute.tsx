import {useRoutes} from 'react-router-dom';
import { PagOfLogin } from '../pages/home/PagOfLogin';
import { PaginaPrincipal } from '../pages/home/PaginaPrincipal';
import { CadastroDeClientes } from '../pages/cadastroDeClientes/CadastroDeClientes';
import { CadastroDeDoc } from '../pages/cadastroDeDocomentos/CadastroDeDoc';
import { RequireAuth } from '../pages/RequireAuth';

 export const MainRoute = () => {
      return useRoutes([ 
        {path: '/', element:  <PagOfLogin />},
        {path: '/home', element:  <RequireAuth><PaginaPrincipal /></RequireAuth>},
        { path: '/cadastro', element:  <CadastroDeClientes />},
        { path: '/doc', element:  <CadastroDeDoc />}
      ]);
  
}


