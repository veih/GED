import { MainRoute } from './pages/Routes/MainRoute';
import { FormProvider } from './contexts/FormContext';



const App = () => {
  return (
    <FormProvider>
      <MainRoute />
    </FormProvider>
  );
}

export default App;