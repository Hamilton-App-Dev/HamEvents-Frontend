import {
    IonButton,
    IonButtons,
    IonToolbar,
    IonCard,
    IonCardSubtitle,
    IonCardHeader,
    IonCardTitle,
} from "@ionic/react";
import { Card } from "../types";
import { IonIcon } from "@ionic/react";
import { fastFood } from "ionicons/icons";
import EventBadge from "./EventBadge";
import transformTime from "../utils/transformTime";
import useCalendarToast from "../hooks/useCalendarToast";

interface EventCardProps {
    card: Card;
}
const EventCard = ({ card }: EventCardProps) => {
    const [showCalendarToast] = useCalendarToast(card);
    const location = card.location.split(",")[0];
    const transformedTime = transformTime(card);
    const time = `${transformedTime.start} - ${transformedTime.end}`;

    return (
        <IonCard key={card.id}>
            <IonCardHeader>
                <div className="flex justify-between items-center">
                    <IonCardTitle>{card.name}</IonCardTitle>
                    {card.food && (
                        <IonIcon icon={fastFood} size="large" color="warning" />
                    )}
                </div>
                <EventBadge
                    startTime={card.event_time_start}
                    endTime={card.event_time_end}
                />
                <IonCardSubtitle className="font-bold">
                    {card.organization}
                </IonCardSubtitle>
                <IonCardSubtitle>{location}</IonCardSubtitle>
                <IonCardSubtitle>{time}</IonCardSubtitle>
            </IonCardHeader>
            <IonToolbar color="medium">
                <IonButtons className="justify-center">
                    <IonButton
                        className="font-bold"
                        onClick={() => showCalendarToast()}
                    >
                        RSVP Now
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonCard>
    );
};

export default EventCard;
