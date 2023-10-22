//filter and render events
//need a go back to top button
import {
	IonRefresher,
	IonRefresherContent,
	RefresherEventDetail,
} from "@ionic/react";

import { Capacitor } from "@capacitor/core";
import { useEffect, useState, createRef } from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	useHistory,
} from "react-router-dom";
import {
	IonCard,
	IonContent,
	IonSearchbar,
	IonCardSubtitle,
	IonButton,
	IonButtons,
	IonToolbar,
	IonInfiniteScrollContent,
	IonInfiniteScroll,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	ScrollDetail
} from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { flame, caretUpOutline } from "ionicons/icons";
import "./SearchBar.css";
import transformTime from "./TransformTime";
type Card = {
	id: string;
	name: string;
	description: string;
	organization: string;
	cover_img: string;
	event_time_start: Date;
	event_time_end: Date;
	location: string;
	food: boolean;
	cancelled: boolean;
};

type Props = {
	myArrayOfCards: Card[];
	fetchData: () => void;
};

const FilteredCardList: React.FC<Props> = ({ myArrayOfCards, fetchData }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [display_scroll_to_top, set_display_scroll_to_top] = useState(false);
	const [cards, setCards] = useState(myArrayOfCards.slice(0, 5));
	const isWeb = Capacitor.getPlatform() === "web";

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

	function scrollToTop() {
		contentRef.current?.scrollToTop(500);
	}

	async function handleScroll(ev: CustomEvent<ScrollDetail>) {
		if (ev.detail.currentY > 500) {
			set_display_scroll_to_top(true)
		} else {
			set_display_scroll_to_top(false)
		}
	}

	const contentRef = createRef<HTMLIonContentElement>();

	useEffect(() => {
		const filteredCards = myArrayOfCards.filter((card) =>
			card.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setCards(filteredCards.slice(0, 5));
	}, [searchTerm, myArrayOfCards]);

	return (
		<IonContent className="container" ref={contentRef}
			scrollEvents={true}
			onIonScroll={handleScroll}>
			{!isWeb && (
				<IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
					<IonRefresherContent />
				</IonRefresher>
			)}
			<IonSearchbar
				placeholder="Search for an event..."
				value={searchTerm}
				onIonChange={(e) => setSearchTerm(e.detail.value!)}
			></IonSearchbar>
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
							<IonCardTitle className="cardName">{card.name}</IonCardTitle>
							<IonIcon icon={flame} size="large" color="danger" />
						</div>
						<IonCardSubtitle style={{ fontWeight: "bold" }}>
							{card.organization}
						</IonCardSubtitle>
						<IonCardSubtitle>{card.location.split(",")[0]}</IonCardSubtitle>
						<IonCardSubtitle>
							{card.location.split(",")[0]}
						</IonCardSubtitle>
						<IonCardSubtitle>
							{transformTime(card).start} -{" "}
							{transformTime(card).end}
						</IonCardSubtitle>
					</IonCardHeader>

					<IonCardContent>{card.description}</IonCardContent>
				</IonCard>
			))}

			{display_scroll_to_top && (
				<IonButton slot="fixed" onClick={scrollToTop} size="small">
					<IonIcon icon={caretUpOutline} size="large" color="white" />
				</IonButton>
			)}

			<IonInfiniteScroll
				onIonInfinite={(ev) => {
					loadMoreCards();
					setTimeout(() => ev.target.complete(), 500);
				}}
			>
				<IonInfiniteScrollContent loadingSpinner="bubbles"></IonInfiniteScrollContent>
			</IonInfiniteScroll>
		</IonContent>
	);
};

export default FilteredCardList;
