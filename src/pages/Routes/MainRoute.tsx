import {useRoutes} from 'react-router-dom';
import { Login } from '../Login';
import { Home } from '../Home';
import { CustomerRegistration } from '../CustomerRegistration';
import { RegistrationOfDocuments } from '../RegistrationOfDocuments';
import { NotFound } from '../NotFou/NotFou';
import { RequireAuth } from '../../contexts/Auth/RequireAuth';

 export const MainRoute = () => {

      return useRoutes([ 
        {path: '/', element:  <Login />},
        {path: '/home', element:  <RequireAuth><Home/></RequireAuth>},
        {path: '/cadastro', element: <RequireAuth><CustomerRegistration /></RequireAuth> },
        {path: '/doc', element: <RequireAuth><RegistrationOfDocuments /></RequireAuth> },
        {path: "*", element: <NotFound />}
      ]);
  
}


