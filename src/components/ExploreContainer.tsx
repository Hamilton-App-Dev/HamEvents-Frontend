import { useState } from "react";
import "./ExploreContainer.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
    // let [response, setResponse] = useState("");
    // useEffect(() => {
    //     fetch("http://localhost:3000/")
    //         .then((response) => response.json())
    //         .then((data) => setResponse(data.msg));
    // });
    return (
        <div className="container">
            {/* <strong>Response: {response}</strong> */}
            <LoginButton />
            <LogoutButton />
        </div>
    );
};

export default ExploreContainer;
