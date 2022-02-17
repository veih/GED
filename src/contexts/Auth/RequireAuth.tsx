import { useContext } from "react";
import { Connect } from "../../pages/Connect";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <Connect />;
    }

    return children;
}