import { Auth0Provider } from "@auth0/auth0-react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Capacitor } from "@capacitor/core";

const container = document.getElementById("root");
const root = createRoot(container!);

const platform = Capacitor.getPlatform();

const auth0Domain =
    process.env.REACT_APP_AUTH0_DOMAIN ?? "domain env var not found";
let auth0ClientId = process.env.REACT_APP_AUTH0_MOBILE_CLIENT_ID ?? "default";
let auth0CallbackUrl =
    process.env.REACT_APP_AUTH0_MOBILE_CALLBACK_URL ?? "default";

if (platform === "web") {
    auth0ClientId = process.env.REACT_APP_AUTH0_WEB_CLIENT_ID ?? "default";
    auth0CallbackUrl = window.location.origin;
}

root.render(
    <Auth0Provider
        domain={auth0Domain}
        clientId={auth0ClientId}
        useRefreshTokens={true}
        useRefreshTokensFallback={false}
        authorizationParams={{
            redirect_uri: auth0CallbackUrl,
        }}
    >
        <App />
    </Auth0Provider>
);
