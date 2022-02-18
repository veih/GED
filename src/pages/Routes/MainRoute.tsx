import {useRoutes} from 'react-router-dom';
import { Connect } from '../Connect';
import { Home } from '../Home';
import { CustomerRegistration } from '../CustomerRegistration';
import { RegistrationOfDocuments } from '../RegistrationOfDocuments';
import { NotFound } from '../NotFou/NotFou';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useContext } from 'react';
import { RequireAuth } from '../../contexts/Auth/RequireAuth';

 export const MainRoute = () => {

      return useRoutes([ 
        {path: '/', element:  <Connect />},
        {path: '/home', element:  <RequireAuth><Home/></RequireAuth>},
        {path: '/cadastro', element: <RequireAuth><CustomerRegistration /></RequireAuth> },
        {path: '/doc', element: <RequireAuth><RegistrationOfDocuments /></RequireAuth> },
        {path: "*", element: <NotFound />}
      ]);
  
}


