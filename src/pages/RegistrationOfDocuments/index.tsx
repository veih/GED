import { Link } from "react-router-dom";
import { CadDoc } from "./style";
import { Butao } from "../../components/Button";

export  const RegistrationOfDocuments = () => {
    return (
        <CadDoc>
            
            <nav className="container">
                <Butao/>
                <div>
                    <div className="brand-title">
                        <p>CADASTRO DE DOCUMENTOS</p>
                    
                    </div>
                </div>
            
            </nav>
            
        </CadDoc>
    );
}
