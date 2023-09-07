//filter and render events
//need a go back to top button
import { useEffect, useState } from "react";
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
} from "@ionic/react";
import ScrollToTop from "react-scroll-to-top";
import { IonIcon } from "@ionic/react";
import { logoIonic } from "ionicons/icons";
import { flame } from "ionicons/icons";
import "./SearchBar.css";
import transformTime from "./TransformTime";
type Card = {
	id: string;
	name: string;
	description: string;
	cover_img: string;
	event_time_start: Date;
	event_time_end: Date;
	location: string;
	food: boolean;
	cancelled: boolean;
};

type Props = {
	myArrayOfCards: Card[];
};

const FilteredCardList: React.FC<Props> = ({ myArrayOfCards }) => {
	const [searchTerm, setSearchTerm] = useState("");
	// let filteredCards = myArrayOfCards.filter((card) =>
	//   card.name.toLowerCase().includes(searchTerm.toLowerCase())
	// );
	const [cards, setCards] = useState(myArrayOfCards.slice(0, 5));

	function loadMoreCards() {
		console.log("loadMoreCards");
		const filteredCards = myArrayOfCards.filter((card) =>
			card.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		const nextCards = filteredCards.slice(cards.length, cards.length + 5);
		// remove map # in location
		const cleanedCards = nextCards.map((card) => ({
			...card,
			location: card.location.split(",")[0],
		}));
		setCards([...cards, ...cleanedCards]);
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
		// remove map # in location
		const cleanedCards = filteredCards.map((card) => ({
			...card,
			location: card.location.split(",")[0],
		}));
		setCards(cleanedCards.slice(0, 5));
	}, [searchTerm, myArrayOfCards]);

	return (
		<IonContent className="container">
			<ScrollToTop smooth color="#6f00ff" />
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
							<IonCardTitle className="cardName">
								{card.name}
							</IonCardTitle>
							<IonIcon icon={flame} size="large" color="danger" />
						</div>
						<IonCardSubtitle>{card.location}</IonCardSubtitle>
						<IonCardSubtitle>
							{transformTime(card).start} -{" "}
							{transformTime(card).end}
						</IonCardSubtitle>
					</IonCardHeader>

					<IonCardContent>{card.description}</IonCardContent>
					<IonToolbar className="btnGroup">
						<IonButtons slot="start">
							{/* <IonButton 
                    onClick={()=>handleDetails(card.id)} 
                    className="btn" 
                    color="primary">
                      More
                  </IonButton> */}
						</IonButtons>
						<IonButtons slot="end">
							<IonButton className="btn" color="primary">
								Attending
							</IonButton>
						</IonButtons>
					</IonToolbar>
				</IonCard>
			))}
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
