import { Header } from "../../components/Header";
import { PagPrincipal } from "./PagPrincipal";
import { Footer } from "../../components/Footer";
import { Main } from "../../components/Main";

export const PaginaPrincipal = () => {
    return (
    <PagPrincipal>
        <body>
                    
            <nav className="container">
                <Header />
                <Main />
                <Footer />
            </nav>
            
        </body>
    </PagPrincipal>
            
    );
}