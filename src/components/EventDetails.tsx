import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import { 
  IonCard, IonContent, IonSearchbar, IonHeader, IonCardSubtitle, 
  IonButton, IonButtons, IonToolbar, IonTitle,
  IonInfiniteScrollContent, IonInfiniteScroll, 
  IonCardContent, IonCardHeader, IonCardTitle 
} from '@ionic/react';
import "./EventDetails.css";
import FlashingColor from './FlashingColor';
interface Props {
	data: {
		id: string;
		name: string;
		description: string;
		cover_img: string;
		event_time_start: Date;
		event_time_end: Date;
		location: string;
		food: boolean;
		cancelled: boolean;
	}[]
}

const Details: FC<Props> = ({ data }) => {
  function transformTime(card: { event_time_start: { toString: () => string; }; event_time_end: { toString: () => string; }; }) {
    var startTimeTrim, endTimeTrim, startTime, endTime;
      startTimeTrim = card.event_time_start.toString().trim().split("T");
      endTimeTrim = card.event_time_end.toString().trim().split("T");
      console.log(endTimeTrim);
      startTime = startTimeTrim[0] + ", " + startTimeTrim[1].slice(0,5);
      endTime = endTimeTrim[0] + ", " + endTimeTrim[1].slice(0,5);
      console.log(endTime);
      if (endTimeTrim[0] === startTimeTrim[0]){
          endTime = endTimeTrim[1].slice(0,5);
      }
    return {"start": startTime, "end": endTime};
  }

  return (
    <IonContent className='container'>
      <IonHeader>
        <IonToolbar>
            <IonTitle>Event Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      {data.map((item) => (
        <IonContent key={item.id}>
        <IonCard color="primary" className="mainCard">
          <IonCardHeader>
            <IonCardTitle>{item.name}</IonCardTitle>
            <br></br>
            <IonCardSubtitle>
              {transformTime(item).start} - {transformTime(item).end}
            </IonCardSubtitle>
            <br></br>
            <IonCardSubtitle>{item.location}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className='goingBtn'>
            <IonButton color='success'>
              I'm Going!
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard color="light">
        <IonCardHeader>
          <IonCardTitle>Description:</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <h2>
          {item.description}
          </h2>
            <IonCard color="danger" className='foodCard'>
              <IonCardHeader>
              <IonCardTitle>🍕🍕🍕🍕🍕🍕</IonCardTitle>
                {item.food === true ? (
                    <FlashingColor text='We are serving food!'></FlashingColor>
                  ) : (
                    <h1>No food this time :(</h1>
                )}
              </IonCardHeader>
            </IonCard>
        </IonCardContent>
        </IonCard>
        </IonContent>
      ))}
    </IonContent>
  );
};
  
export default Details;