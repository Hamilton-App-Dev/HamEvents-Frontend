import { useEffect, useState, Component } from 'react';
import { IonContent } from '@ionic/react';
import { IonCard, IonCardSubtitle, IonButton, IonButtons, IonToolbar, IonInfiniteScrollContent, IonInfiniteScroll, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import "./EventCard";
const myArrayOfCards = [
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120002",
      name: "Tax Day Destress",
      description: "Taxes stressing you out (I know you don't do taxes)? Classes stressing you out? Come\
      to FYE DESTRESS TABLE! We have everything you need to destress, with treats from Love Bites and other\
      goodies.",
      cover_img: "",
      event_time_start: new Date("2023-04-20T14:30:00"),
      event_time_end: new Date("2023-04-20T16:30:00"),
      location: "Sadove Sun Porch, Map #26",
      food: true,
      cancelled: false
  }, 
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120003",
      name: "First Year Formal",
      description: "Come join our first year formal! We'll be offering a photo booth, chocolate fountain, \
      gelato, and a bunch of other goodies!",
      cover_img: "",
      event_time_start: new Date("2023-04-22T21:00:00"),
      event_time_end: new Date("2023-04-22T23:30:00"),
      location: "Events Barn and Annex, Map #20",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120004",
      name: "Mindfulness Club Meeting",
      description: "Come and meditate at 9PM tonight on the third floor of the chapel. As always newcomers\
      are always welcome!",
      cover_img: "",
      event_time_start: new Date("2023-04-22320:00:00"),
      event_time_end: new Date("2023-04-22T21:00:00"),
      location: "Chapel, Map #18",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120005",
      name: "Spring Forage",
      description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
      learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
      cover_img: "",
      event_time_start: new Date("2023-04-22T21:00:00"),
      event_time_end: new Date("2023-04-22T23:30:00"),
      location: "Glen House, Map #10",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120006",
      name: "Holi Celebration",
      description: "Join ICA and ASU to celebrate Holi! We'll have colors! Pichkaris! Minar! Bring your friends \
      and some clothes you'd be okay to stain with colors!",
      cover_img: "",
      event_time_start: new Date("2023-04-21T14:00:00"),
      event_time_end: new Date("2023-04-22T16:00:00"),
      location: "Bab Pav, Map #15",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120007",
      name: "Star War Pedro Pascal Show",
      description: "Pedro Pascal! Baby Yoda! Jack Black and Lizzo, because WHY NOT? May the Force be with you!",
      cover_img: "",
      event_time_start: new Date("2023-04-20T18:00:00"),
      event_time_end: new Date("2023-04-20T19:00:00"),
      location: "Sadove Basement, Map #10",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120008",
      name: "First Year Formal",
      description: "Come join our first year formal! We'll be offering a photo booth, chocolate fountain, \
      gelato, and a bunch of other goodies!",
      cover_img: "",
      event_time_start: new Date("2023-04-22T21:00:00"),
      event_time_end: new Date("2023-04-22T23:30:00"),
      location: "Events Barn and Annex, Map #20",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120009",
      name: "First Year Formal",
      description: "Come join our first year formal! We'll be offering a photo booth, chocolate fountain, \
      gelato, and a bunch of other goodies!",
      cover_img: "",
      event_time_start: new Date("2023-04-22T21:00:00"),
      event_time_end: new Date("2023-04-22T23:30:00"),
      location: "Events Barn and Annex, Map #20",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120010",
      name: "First Year Formal",
      description: "Come join our first year formal! We'll be offering a photo booth, chocolate fountain, \
      gelato, and a bunch of other goodies!",
      cover_img: "",
      event_time_start: new Date("2023-04-22T21:00:00"),
      event_time_end: new Date("2023-04-22T23:30:00"),
      location: "Events Barn and Annex, Map #20",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120011",
      name: "Spring Forage",
      description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
      learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
      cover_img: "",
      event_time_start: new Date("2023-04-22T21:00:00"),
      event_time_end: new Date("2023-04-22T23:30:00"),
      location: "Glen House, Map #10",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120012",
      name: "Spring Forage",
      description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
      learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
      cover_img: "",
      event_time_start: new Date("2023-04-22T21:00:00"),
      event_time_end: new Date("2023-04-22T23:30:00"),
      location: "Glen House, Map #10",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120013",
      name: "Spring Forage",
      description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
      learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
      cover_img: "",
      event_time_start: new Date("2023-04-22T21:00:00"),
      event_time_end: new Date("2023-04-22T23:30:00"),
      location: "Glen House, Map #10",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120014",
      name: "Spring Forage",
      description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
      learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
      cover_img: "",
      event_time_start: new Date("2023-04-22T21:00:00"),
      event_time_end: new Date("2023-04-22T23:30:00"),
      location: "Glen House, Map #10",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120015",
      name: "Spring Forage",
      description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
      learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
      cover_img: "",
      event_time_start: new Date("2023-04-22T21:00:00"),
      event_time_end: new Date("2023-04-22T23:30:00"),
      location: "Glen House, Map #10",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120016",
      name: "Spring Forage",
      description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
      learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
      cover_img: "",
      event_time_start: new Date("2023-04-22T21:00:00"),
      event_time_end: new Date("2023-04-22T23:30:00"),
      location: "Glen House, Map #10",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120017",
      name: "Spring Forage",
      description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
      learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
      cover_img: "",
      event_time_start: new Date("2023-04-22T21:00:00"),
      event_time_end: new Date("2023-04-22T23:30:00"),
      location: "Glen House, Map #10",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120018",
      name: "Spring Forage",
      description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
      learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
      cover_img: "",
      event_time_start: new Date("2023-04-22T21:00:00"),
      event_time_end: new Date("2023-04-22T23:30:00"),
      location: "Glen House, Map #10",
      food: true,
      cancelled: false,
  },
  {
      id: "f2236ece-e14a-11ed-b5ea-0242ac120019",
      name: "Spring Forage",
      description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
      learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
      cover_img: "",
      event_time_start: new Date("2023-04-22T21:00:00"),
      event_time_end: new Date("2023-04-22T23:30:00"),
      location: "Glen House, Map #10",
      food: true,
      cancelled: false,
  },
  {
    id: "f2236ece-e14a-11ed-b5ea-0242ac120021",
    name: "Spring Forage",
    description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
    learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
    cover_img: "",
    event_time_start: new Date("2023-04-22T21:00:00"),
    event_time_end: new Date("2023-04-22T23:30:00"),
    location: "Glen House, Map #10",
    food: true,
    cancelled: false,
  },
  {
    id: "f2236ece-e14a-11ed-b5ea-0242ac120022",
    name: "Spring Forage",
    description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
    learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
    cover_img: "",
    event_time_start: new Date("2023-04-22T21:00:00"),
    event_time_end: new Date("2023-04-22T23:30:00"),
    location: "Glen House, Map #10",
    food: true,
    cancelled: false,
  },
  {
    id: "f2236ece-e14a-11ed-b5ea-0242ac120023",
    name: "Spring Forage",
    description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
    learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
    cover_img: "",
    event_time_start: new Date("2023-04-22T21:00:00"),
    event_time_end: new Date("2023-04-22T23:30:00"),
    location: "Glen House, Map #10",
    food: true,
    cancelled: false,
  }
];
class Search extends Component {

}
function MyComponent() {
  const [cards, setCards] = useState(myArrayOfCards.slice(0, 5));

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
    const nextCards = myArrayOfCards.slice(cards.length, cards.length + 5);
    setCards([...cards, ...nextCards]);
    console.log(cards.length);
  }
  return (
    <div className='container'>
    <Search>

    </Search>
    <IonContent>
      {cards.map((card, index) => (
        <IonCard key={index}>
            <IonCardHeader className="header">
                <IonCardTitle>{card.name}</IonCardTitle>
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
      <IonInfiniteScroll onIonInfinite={(ev)=>{loadMoreCards(); setTimeout(() => ev.target.complete(), 300);}}>
        <IonInfiniteScrollContent loadingSpinner="bubbles">
        </IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </IonContent>
    </div>
  );
  
}

export default MyComponent;