import { Router } from './router';
import { FormProvider } from './contexts/FormContext';
import { PagOfLogin } from './pages/home/PagOfLogin';
import { useHistory } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

const App = () => {
  return (
    <FormProvider>
      <PagOfLogin/>
      <Router />
    </FormProvider>
  );
}

export default App;