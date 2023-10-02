import React from "react";
import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/react';
interface EventCardProps {
    startTime: Date;
    endTime: Date;
}

const EventCard: React.FC<EventCardProps> = 
    ({startTime, endTime}) => {
        const currentTime = new Date();
        const startTimeDate = new Date(startTime);
        const endTimeDate = new Date(endTime);
        const isHappening = currentTime >= startTimeDate && currentTime <= endTimeDate;
        return (
            <div className="happening">
                {isHappening && (
                    <IonBadge color="warning">Happening NOW</IonBadge>
                )}
            </div>
        )

}
export default EventCard;
