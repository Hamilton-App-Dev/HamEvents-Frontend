import { useEffect, useState } from "react";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
	let [response, setResponse] = useState("");
	useEffect(() => {
		fetch("http://localhost:3000/")
			.then((response) => response.json())
			.then((data) => setResponse(data.msg));
	});
	return (
		<div className="container">
			<strong>{response}</strong>
			<p>
				Start with Ionic{" "}
				<a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
					UI Components
				</a>
			</p>
		</div>
	);
};

export default ExploreContainer;
