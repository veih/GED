
import { PagPrincipal } from "./style";

import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useContext } from "react";

export const Home = () => {
    return (
       
        <PagPrincipal>
            <Header />
        </PagPrincipal>
  
    );
}