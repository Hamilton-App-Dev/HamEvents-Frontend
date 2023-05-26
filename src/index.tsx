import { Auth0Provider } from "@auth0/auth0-react";
import { createRoot } from "react-dom/client";
import App from "./App";

// import dotenv from "dotenv";
// dotenv.config();

const container = document.getElementById("root");
const root = createRoot(container!);

const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN ?? "default";
const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID ?? "default";

root.render(
    <Auth0Provider
        domain={auth0Domain}
        clientId={auth0ClientId}
        useRefreshTokens={true}
        useRefreshTokensFallback={false}
        authorizationParams={{
            redirect_uri: window.location.origin + "/",
            // redirect_uri:
            //     "io.ionic.starter://localhost:8100/capacitor/io.ionic.starter/callback",
        }}
    >
        <App />
    </Auth0Provider>
);
