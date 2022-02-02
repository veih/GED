import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';

const App = () => {
      
  return (
    <div className="">
          <header className=''>
              <h1>Bem vindo ou GED </h1>
          </header>
        
        <div className="" >
            
           <Routes>
               <Route  path='/' element={<Home />} />
               <Route  path='/sobre' element={<About />} />
           </Routes>
        </div>
    </div>
      
  )
      
}

export default App;