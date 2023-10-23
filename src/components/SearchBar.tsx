//filter and render events
//need a go back to top button
import {
	IonButton,
	IonRefresher,
	IonRefresherContent,
	RefresherEventDetail,
	useIonToast,
} from "@ionic/react";

import { Capacitor } from "@capacitor/core";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import {
	IonCard,
	IonContent,
	IonSearchbar,
	IonCardSubtitle,
	IonInfiniteScrollContent,
	IonInfiniteScroll,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
} from "@ionic/react";
import NoResult from "./NoResult";
import ScrollToTop from "react-scroll-to-top";
import { IonIcon } from "@ionic/react";
import { fastFood, logoIonic } from "ionicons/icons";
import EventCard from "./HappeningNow";
import "./SearchBar.css";
import transformTime from "./TransformTime";
import createGoogleCalendarLink from "../utils/createCalendarLink";
import { Card } from "../types";

type Props = {
	myArrayOfCards: Card[];
	fetchData: () => void;
};

const FilteredCardList: React.FC<Props> = ({ myArrayOfCards, fetchData }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [cards, setCards] = useState(myArrayOfCards.slice(0, 5));
	const isWeb = Capacitor.getPlatform() === "web";
	const [presentToast] = useIonToast();

	function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
		fetchData();
		event.detail.complete();
	}

	function loadMoreCards() {
		console.log("loadMoreCards");
		const filteredCards = myArrayOfCards.filter((card) =>
			card.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		const nextCards = filteredCards.slice(cards.length, cards.length + 5);
		setCards([...cards, ...nextCards]);
	}

	const history = useHistory();
	const handleDetails = (id: string) => {
		history.push(`/details/${id}`, { data: myArrayOfCards });
		window.location.href = `/details/${id}`;
	};

	useEffect(() => {
		const filteredCards = myArrayOfCards.filter((card) =>
			card.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setCards(filteredCards.slice(0, 5));
	}, [searchTerm, myArrayOfCards]);

	const handleSaveToCalendar = (card: Card) => {
		const googleCalendarUrl = createGoogleCalendarLink(card);
		window.open(googleCalendarUrl, "_system");
	};

	const handleRSVP = (card: Card) => {
		presentToast({
			message: "RSVP'd! Would you like to save to your calendar?",
			duration: 5000,
			buttons: [
				{
					text: "Yes",
					role: "info",
					handler: () => {
						handleSaveToCalendar(card);
					},
				},
				{
					text: "Dismiss",
					role: "cancel",
				},
			],
		});
	};

	return (
		<IonContent className="container">
			{!isWeb && (
				<IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
					<IonRefresherContent />
				</IonRefresher>
			)}

			<ScrollToTop smooth color="#6f00ff" />
			<IonSearchbar
				placeholder="Search for an event..."
				value={searchTerm}
				onIonChange={(e) => setSearchTerm(e.detail.value!)}
			></IonSearchbar>
			{cards.length > 0 ? (
				<div>
					{cards.map((card) => (
						<IonCard key={card.id}>
							<IonCardHeader className="header">
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
									}}
								>
									<IonCardTitle className="cardName">
										{card.name}
									</IonCardTitle>
									<div>
										{card.food && (
											<IonIcon
												icon={fastFood}
												size="large"
												color="warning"
											/>
										)}
									</div>
								</div>
								<div
									style={{
										marginTop: 5,
										marginBottom: 5,
									}}
								>
									<EventCard
										startTime={card.event_time_start}
										endTime={card.event_time_end}
									/>
								</div>
								<IonCardSubtitle style={{ fontWeight: "bold" }}>
									{card.organization}
								</IonCardSubtitle>
								<IonCardSubtitle>
									{card.location.split(",")[0]}
								</IonCardSubtitle>
								<IonCardSubtitle>
									{transformTime(card).start} -{" "}
									{transformTime(card).end}
								</IonCardSubtitle>
							</IonCardHeader>

							<div
								style={{
									display: "flex",
									justifyContent: "end",
									alignItems: "end",
									paddingRight: 10,
									paddingBottom: 10,
								}}
							>
								<IonButton onClick={() => handleRSVP(card)}>
									RSVP Now
								</IonButton>
							</div>
						</IonCard>
					))}
					<IonInfiniteScroll
						onIonInfinite={(ev) => {
							loadMoreCards();
							setTimeout(() => ev.target.complete(), 50);
						}}
					>
						<IonInfiniteScrollContent loadingSpinner="bubbles"></IonInfiniteScrollContent>
					</IonInfiniteScroll>
				</div>
			) : (
				<NoResult searchTerm={searchTerm} />
			)}
		</IonContent>
	);
};

export default FilteredCardList;
