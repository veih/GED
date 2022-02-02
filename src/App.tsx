import {Routes, Route} from 'react-router-dom';
import { Entra } from './pages/Entra';
import { PaginaPrincipal } from './pages/PaginaPrincipal';

const App = () => {
      
  return (
    <div className="">
        
        <div className="" >
            
           <Routes>
               <Route  path='/' element={<Entra />} />
               <Route  path='/sobre' element={<PaginaPrincipal />} />
           </Routes>
        </div>
    </div>
      
  )
      
}

export default App;