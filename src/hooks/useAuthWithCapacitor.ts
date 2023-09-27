import { useAuth0 } from "@auth0/auth0-react";
import { Browser } from "@capacitor/browser";

const useAuth0WithCapacitor = () => {
    const { logout, loginWithRedirect } = useAuth0();
    const logoutUri = process.env.REACT_APP_AUTH0_LOGOUT_URL;

    const doLogin = async () => {
        await loginWithRedirect({
            async openUrl(url) {
                // Redirect using Capacitor's Browser plugin
                await Browser.open({
                    url,
                    windowName: "_self",
                });
            },
        });
    };

    const doLogout = async () => {
        await logout({
            logoutParams: {
                returnTo: logoutUri,
            },
            async openUrl(url) {
                await Browser.open({
                    url,
                    windowName: "_self",
                });
            },
        });
    };

    return { doLogout, doLogin };
};

export { useAuth0WithCapacitor };
