import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from "@ionic/react";
import React, { useEffect, useState } from "react";
import FilteredCardList from "../components/SearchBar";
import "./Home.css";
import ProfileDropdown from "../components/ProfileDropdown";

const Home: React.FC = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchData = () => {
		fetch(`https://events-backend-hquq.onrender.com/events`)
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
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<div style={{ display: "flex", alignItems: "center" }}>
						<IonTitle>Your Updates</IonTitle>
						<ProfileDropdown></ProfileDropdown>
					</div>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				{loading && <h1>Loading...One moment please</h1>}
				{error && (
					<div>{`There is a problem fetching the events data - ${error}`}</div>
				)}
				{data && (
					<FilteredCardList
						fetchData={fetchData}
						myArrayOfCards={data}
					></FilteredCardList>
				)}
			</IonContent>
		</IonPage>
	);
};

export default Home;
