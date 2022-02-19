
import { PagPrincipal } from "./style";

import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useContext } from "react";

export const Home = () => {
    const Auth = useContext(AuthContext);

    return (
        <PagPrincipal>
            <Header />
        </PagPrincipal>
    );
}