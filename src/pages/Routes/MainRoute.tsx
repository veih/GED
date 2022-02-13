import {useRoutes} from 'react-router-dom';
import { Connect } from '../Connect';
import { Home } from '../Home';
import { CustomerRegistration } from '../CustomerRegistration';
import { RegistrationOfDocuments } from '../RegistrationOfDocuments';
import { FormStep1 } from '../FormStep1';
import { FormStep2 } from '../FormStep2';
import { FormStep3 } from '../FormStep3';
import { NotFound } from '../NotFou/NotFou';

 export const MainRoute = () => {
      return useRoutes([ 
        {path: '/', element:  <Connect />},
        {path: '/home', element:  <Home />},
        {path: '/cadastro', element:  <CustomerRegistration />},
        {path: '/doc', element:  <RegistrationOfDocuments />},
        {path: "/step",  element: <FormStep1 />},
        {path: "/step2", element: <FormStep2 />},
        {path: "/step3", element: <FormStep3 />},
        {path: "*", element: <NotFound />}
      ]);
  
}


