import {Routes, Route} from 'react-router-dom';
import { PagDeLogin } from './pages/PagDeLogin';
import { PaginaPrincipal } from './pages/PaginaPrincipal';
import { CadastroDeClientes } from './pages/CadastroDeClientes';
import { CadastroDeDoc } from './pages/CadastroDeDoc';
const App = () => {
      
  return (
    <div className="">
       <Routes>
          <Route  path='/' element={<PagDeLogin />} />
         <Route  path='/home' element={<PaginaPrincipal />} />
         <Route  path='/cadastro' element={<CadastroDeClientes/>} />
          <Route path='/doc' element={<CadastroDeDoc/>}/>
      </Routes>
    </div>

      
  )
      
}

export default App;