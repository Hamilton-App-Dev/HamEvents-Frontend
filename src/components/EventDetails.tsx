import React, { FC, useState} from 'react';
import { useHistory } from 'react-router';
import { 
  IonCard, IonContent, IonHeader, IonCardSubtitle, 
  IonButton, IonToolbar, IonTitle,
  IonCardContent, IonCardHeader, IonCardTitle 
} from '@ionic/react';
import "./EventDetails.css";
import FlashingColor from './FlashingColor';
import transformTime from './TransformTime';

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
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

/*   const [showMap, setShowMap] = useState(false);
  const handleShowMap = () => {
    setShowMap(true);
  };
 */
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
          <IonCardContent className='Btns'>
            <IonButton color='success'>
              I'm Going!
            </IonButton>
            <IonButton color='dark' onClick={handleGoBack}>
              Browse More
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

        <IonCard color="dark" className="mapCard">
          <IonCardHeader>
            <IonCardTitle>Map:</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        </IonContent>
      ))}
    </IonContent>
  );
};
  
export default Details;