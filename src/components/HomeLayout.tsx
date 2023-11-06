import {
    IonRefresher,
    IonFabButton,
    IonRefresherContent,
    RefresherEventDetail,
    IonContent,
    IonSearchbar,
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    ScrollDetail,
    IonFab,
} from "@ionic/react";
import { Capacitor } from "@capacitor/core";
import { useEffect, useState, createRef } from "react";
import { IonIcon } from "@ionic/react";
import { caretUpOutline } from "ionicons/icons";
import EventCard from "./EventCard";
import NoResult from "./NoResult";
import { Card } from "../types";

type Props = {
    myArrayOfCards: Card[];
    fetchData: () => void;
};

const HomeLayout: React.FC<Props> = ({ myArrayOfCards, fetchData }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [displayScrollToTopButton, setDisplayScrollToTopButton] =
        useState(false);
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

    const contentRef = createRef<HTMLIonContentElement>();

    function scrollToTop() {
        contentRef.current?.scrollToTop(500);
    }

    async function handleScroll(ev: CustomEvent<ScrollDetail>) {
        if (ev.detail.currentY > 500) {
            setDisplayScrollToTopButton(true);
        } else {
            setDisplayScrollToTopButton(false);
        }
    }

    useEffect(() => {
        const filteredCards = myArrayOfCards.filter((card) =>
            card.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCards(filteredCards.slice(0, 5));
    }, [searchTerm, myArrayOfCards]);

    return (
        <IonContent
            ref={contentRef}
            scrollEvents={true}
            onIonScroll={handleScroll}
        >
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
            {displayScrollToTopButton && (
                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton onClick={scrollToTop}>
                        <IonIcon
                            icon={caretUpOutline}
                            size="large"
                            color="white"
                        />
                    </IonFabButton>
                </IonFab>
            )}

            {cards.length > 0 ? (
                <div>
                    {cards.map((card) => (
                        <EventCard card={card} />
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

export default HomeLayout;
