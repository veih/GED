import {useRoutes} from 'react-router-dom';
import { Abuat } from '../pages/Abuat';
import { Home } from '../pages/Home';
import { CadastroDeClientes } from '../pages/cadastroDeClientes';
import { CadastroDeDoc } from '../pages/cadastroDeDocomentos';
import { FormStep1 } from '../pages/FormStep1';
import { FormStep2 } from '../pages/FormStep2';
import { FormStep3 } from '../pages/FormStep3';
import { NotFound } from '../pages/NotFou/NotFou';

 export const MainRoute = () => {
      return useRoutes([ 
        {path: '/', element:  <Abuat />},
        {path: '/home', element:  <Home />},
        {path: '/cadastro', element:  <CadastroDeClientes />},
        {path: '/doc', element:  <CadastroDeDoc />},
        {path: "/step",  element: <FormStep1 />},
        {path: "/step2", element: <FormStep2 />},
        {path: "/step3", element: <FormStep3 />},
        {path: "*", element: <NotFound />}
      ]);
  
}


