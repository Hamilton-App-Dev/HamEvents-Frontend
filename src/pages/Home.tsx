import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
// import { IonTabs, IonTabBar, IonTabButton, IonIcon } from "@ionic/react";

import React, { useEffect, useState } from "react";
import FilteredCardList from "../components/SearchBar";
import "./Home.css";

const Home: React.FC = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const serverUrl = process.env.REACT_APP_API_URL + "events/" ?? "";
	console.log("url", serverUrl);
	useEffect(() => {
		fetch(serverUrl)
			.then((response) => response.json())
			.then((actualData) => {
				console.log(actualData);
				setData(actualData);
			})
			.catch((error) => {
				setError(error.message);
				setData(null);
				console.log(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Events Listing</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				{loading && <h1>Loading...One moment please</h1>}
				{error && (
					<div>{`There is a problem fetching the events data - ${error}`}</div>
				)}
				{data && (
					<FilteredCardList myArrayOfCards={data}></FilteredCardList>
				)}
			</IonContent>
		</IonPage>
	);
};

export default Home;
