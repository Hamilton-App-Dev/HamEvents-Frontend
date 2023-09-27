import { useAuth0 } from "@auth0/auth0-react";
import { Browser } from "@capacitor/browser";
import { Capacitor } from "@capacitor/core";

const useAuth0WithCapacitor = () => {
    const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
    const logoutUri = process.env.REACT_APP_AUTH0_MOBILE_LOGOUT_URL;

    const isWeb = Capacitor.getPlatform() === "web";

    let loginOptions = {};
    let logoutOptions = {};

    if (isWeb) {
        logoutOptions = {
            logoutParams: {
                returnTo: window.location.origin,
            },
        };
    } else {
        // options for ios or android
        loginOptions = {
            async openUrl(url: string) {
                await Browser.open({
                    url,
                    windowName: "_self",
                });
            },
        };

        logoutOptions = {
            logoutParams: {
                returnTo: logoutUri,
            },
            async openUrl(url: string) {
                await Browser.open({
                    url,
                    windowName: "_self",
                });
            },
        };
    }

    const doLogin = async () => {
        await loginWithRedirect(loginOptions);
    };

    const doLogout = async () => {
        await logout(logoutOptions);
    };

    return { isAuthenticated, doLogout, doLogin };
};

export { useAuth0WithCapacitor };
