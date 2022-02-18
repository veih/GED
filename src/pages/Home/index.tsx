
import { PagPrincipal } from "./style";

import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useContext } from "react";
import { Butao } from "../../components/Button";

export const Home = () => {
    return (
       
        <nav>
            <Header />
            <Butao/>
        </nav>
  
    );
}