import {useRoutes} from 'react-router-dom';
import { Connect } from '../Connect';
import { Home } from '../Home';
import { CustomerRegistration } from '../CustomerRegistration';
import { RegistrationOfDocuments } from '../RegistrationOfDocuments';
import { NotFound } from '../NotFou/NotFou';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useContext } from 'react';

 export const MainRoute = () => {

  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  }

      return useRoutes([ 
        {path: '/', element:  <Connect />},
        {path: '/home', element:  <Home />},
        {path: '/cadastro', element:  <CustomerRegistration />},
        {path: '/doc', element:  <RegistrationOfDocuments />},
        {path: "*", element: <NotFound />}
      ]);
  
}


