import React, { FC } from 'react';
import { 
  IonCard, IonContent, IonSearchbar, IonCardSubtitle, 
  IonButton, IonButtons, IonToolbar, 
  IonInfiniteScrollContent, IonInfiniteScroll, 
  IonCardContent, IonCardHeader, IonCardTitle 
} from '@ionic/react';
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
    return (
      <IonContent>
      {data.map((item) => (
        <IonContent key={item.id}>
        <IonCard color="primary">
          <IonCardHeader>
            <IonCardTitle>{item.name}</IonCardTitle>
            <IonCardSubtitle>{item.event_time_start.toString()} - {item.event_time_end.toString()}</IonCardSubtitle>
            <IonCardSubtitle>{item.location}</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        <IonCard color="light">
        <IonCardHeader>
          <IonCardTitle>Description:</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          {item.description}
        </IonCardContent>
        </IonCard>

        <IonCard color="danger">
        <IonCardHeader>
          <IonCardTitle>🍕</IonCardTitle>
          <IonCardSubtitle>{item.food}</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          
        </IonCardContent>
        </IonCard>
        </IonContent>
      ))}
      </IonContent>


      
      
      // <div>
      //     <h1>Event Details</h1>
      //     {data.map((item) => (
      //       <div key={item.id}>
      //         <h2>{item.name}</h2>
      //         <p>{item.description}</p>
      //       </div>
      //     ))}
      //   </div></>
    );
  };
  
  export default Details;