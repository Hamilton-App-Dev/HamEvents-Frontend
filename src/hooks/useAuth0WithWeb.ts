import { useAuth0 } from "@auth0/auth0-react";

const useAuth0WithWeb = () => {
    const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

    const doLogin = async () => {
        await loginWithRedirect();
    };

    const doLogout = async () => {
        await logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
    };

    return { isAuthenticated, doLogout, doLogin };
};

export { useAuth0WithWeb };
