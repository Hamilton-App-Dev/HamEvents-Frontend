import { useEffect, useState, Component, ReactNode } from 'react';
import { IonContent } from '@ionic/react';
import { IonCard, IonSearchbar, IonCardSubtitle, IonButton, IonButtons, IonToolbar, IonInfiniteScrollContent, IonInfiniteScroll, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import "./SearchBar.css";
import "./EventCard"
import MyComponent from './EventCard';

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

  console.log(cards);
  function transformTime(card: { event_time_start: { toString: () => string; }; event_time_end: { toString: () => string; }; }) {
    var startTimeTrim, endTimeTrim, startTime, endTime;
      startTimeTrim = card.event_time_start.toString().trim().split(/[ ,]+/);
      endTimeTrim = card.event_time_end.toString().trim().split(/[ ,]+/);
      startTime = startTimeTrim[0] + ", " + startTimeTrim.slice(1,3).toString().replace(/,/g, ' ') + ", " + startTimeTrim[4];
      endTime = endTimeTrim[0] + ", " + endTimeTrim.slice(1,3).toString().replace(/,/g, ' ') + ", " + endTimeTrim[4];
      if (endTimeTrim[0] === startTimeTrim[0]){
           endTime = endTimeTrim[4];
      }
    return {"start": startTime, "end": endTime};
  }
  // slice(0, 10) returns the first 10 items from the array
  function loadMoreCards() {
    console.log("loadMoreCards");
    const filteredCards = myArrayOfCards.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const nextCards = filteredCards.slice(cards.length, cards.length + 5);
    setCards([...cards, ...nextCards]);
  }
  
  useEffect(() => {
    const filteredCards = myArrayOfCards.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCards(filteredCards.slice(0, 5));
  }, [searchTerm, myArrayOfCards]);

  return (
    // <div>
    //   <input
    //     type="text"
    //     placeholder="Search for a card..."
    //     value={searchTerm}
    //     onChange={(e) => setSearchTerm(e.target.value)}
    //   />
      <IonContent>
        <IonSearchbar placeholder='Search for a card...' value={searchTerm} onIonChange={(e) => setSearchTerm(e.detail.value!)} ></IonSearchbar>
        {cards.map((card, index) => (
          <IonCard key={index}>
            <IonCardHeader className="header">
                <IonCardTitle className='cardName'>{card.name}</IonCardTitle>
                <IonCardSubtitle>{card.location}</IonCardSubtitle>
                <IonCardSubtitle>
                  {transformTime(card).start} - {transformTime(card).end}
                </IonCardSubtitle>
            </IonCardHeader>
                
            <IonCardContent>
                {card.description}
            </IonCardContent>
            <IonToolbar className="btnGroup">
              <IonButtons slot="start">
                <IonButton className="btn" color="primary">More</IonButton>
              </IonButtons>
              <IonButtons slot="end">
                  <IonButton className="btn" color="primary">Attending</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonCard>
        ))}
        <IonInfiniteScroll onIonInfinite={(ev)=>{loadMoreCards(); setTimeout(() => ev.target.complete(), 500);}}>
        <IonInfiniteScrollContent loadingSpinner="bubbles">
        </IonInfiniteScrollContent>
        </IonInfiniteScroll>
        </IonContent>
     // </div>
  );
};

export default FilteredCardList;

