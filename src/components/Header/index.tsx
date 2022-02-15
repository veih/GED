import * as C from './styles';

export const Header = () => {
    return (
        <C.Container>
            <div className='header'>
              <p>GED</p>
              <ul>
                  <li>Archives</li>
                  <li>Documents</li>
                  <li>Registers</li>
                  <li>Notes</li>
              </ul>
              <input className='input' type="text" placeholder='Pesquisa'/>
                
               
            </div>

        </C.Container>
    );
}