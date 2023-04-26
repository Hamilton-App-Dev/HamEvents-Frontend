import React, { FC } from 'react';
import { IonButton } from '@ionic/react';

interface Props {
  history: {
    push: (path: string) => void;
  };
}

const ButtonPage: FC<Props> = ({ history }) => {
  const handleButtonClick = (cardid: string) => {
    const id = cardid; // replace with the actual ID from your data
    history.push(`/details/${id}`);
  };

  return (
      <IonButton onClick={()=>handleButtonClick}>More</IonButton>
  );
};

export default ButtonPage;
