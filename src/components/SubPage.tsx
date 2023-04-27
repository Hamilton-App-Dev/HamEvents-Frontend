import { useEffect, useState, Component, ReactNode, } from 'react';
import { IonContent, IonItem, IonLabel } from '@ionic/react';
import { useLocation, useHistory, useParams } from "react-router-dom"
import { 
  IonCard, IonSearchbar, IonCardSubtitle, 
  IonButton, IonButtons, IonToolbar, 
  IonInfiniteScrollContent, IonInfiniteScroll, 
  IonCardContent, IonCardHeader, IonCardTitle 
} from '@ionic/react';
import Details from './EventDetails'
import "./SearchBar.css";
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

const SubPage: React.FC = () => {
	const { id } = useParams<{id: string}>();
	const location = useHistory().location.state as {data: Props['data']};

	const state = location;
	if (!state || !state.data) {
		return (
		  <>
			<IonItem>
			  <IonLabel>
				<h1>Missing Data...</h1>
			  </IonLabel>
			</IonItem>
		  </>
		)
	  }


  // find the card data that matches the id parameter
  const card = location.data.find(card => card.id === id);

  if (!card) {
    return (
      <>
        <IonItem>
          <IonLabel>
            <h1>Missing Data...</h1>
          </IonLabel>
        </IonItem>
      </>
    )
  }

  return (
	<IonContent className='subPageContainer'>
  		<Details data={[card]} />
	</IonContent>
  )

}

export default SubPage;