import { PaginaPrincipal } from './pages/PaginaPrincipal';
import { CadastroDeClientes } from './pages/CadastroDeClientes';
import { CadastroDeDoc } from './pages/CadastroDeDoc';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
const App = () => {
      
  return (
          <BrowserRouter>
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route  path='/sobre' element={<PaginaPrincipal />} />
                <Route  path='/cadastro' element={<CadastroDeClientes/>} />
                <Route  path='/doc' element={<CadastroDeDoc/>} />
            </Routes>
          </BrowserRouter>     
  );
      
}

export default App;