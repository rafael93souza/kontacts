import { useContext, } from "react";
import UserContext from "../Contexts/useContexts";

function useApp() {
    return useContext(UserContext);
}
export default useApp;
