import {useRoutes} from 'react-router-dom';
import { PagDeLogin } from '../pages/PagDeLogin';
import { PaginaPrincipal } from '../pages/PaginaPrincipal';
import { CadastroDeClientes } from '../pages/CadastroDeClientes';
import { CadastroDeDoc } from '../pages/CadastroDeDoc';
import { RequireAuth } from '../pages/RequireAuth';

 export const MainRoute = () => {
      return useRoutes([ 
        {path: '/', element:  <PagDeLogin />},
        {path: '/home', element:  <RequireAuth><PaginaPrincipal /></RequireAuth>},
        { path: '/cadastro', element:  <CadastroDeClientes />},
        { path: '/doc', element:  <CadastroDeDoc />}
      ]);
  
}


