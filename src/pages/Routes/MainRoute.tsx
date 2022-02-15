import {useRoutes} from 'react-router-dom';
import { Connect } from '../Connect';
import { Home } from '../Home';
import { CustomerRegistration } from '../CustomerRegistration';
import { RegistrationOfDocuments } from '../RegistrationOfDocuments';
import { NotFound } from '../NotFou/NotFou';

 export const MainRoute = () => {
      return useRoutes([ 
        {path: '/', element:  <Connect />},
        {path: '/home', element:  <Home />},
        {path: '/cadastro', element:  <CustomerRegistration />},
        {path: '/doc', element:  <RegistrationOfDocuments />},
        {path: "*", element: <NotFound />}
      ]);
  
}


