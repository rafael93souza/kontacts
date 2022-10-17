import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import useApp from "../hooks/useApp";
import Main from "../pages/Main";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { getItem } from "../utils/storage";

function ProtectedRouter({ redirect }) {
    const isAuthenticated = getItem("token");
    return isAuthenticated ? <Outlet /> : <Navigate to={redirect} />
}

function VerifyProtectedRouter({ redirect }) {
    const isAuthenticated = getItem("token");
    return isAuthenticated ? <Navigate to={redirect} /> : <Outlet />
}

function RouterMain() {
    return (
        <Routes>
            <Route element={<VerifyProtectedRouter redirect='/main' />}>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Route>


            <Route element={<ProtectedRouter redirect="/sign-in" />}>
                <Route path="/main" element={<Main />} />
            </Route>


        </Routes>
    )
}

export default RouterMain;