import React from "react";
import { IonBadge } from "@ionic/react";
interface EventBadgeProps {
    startTime: Date;
    endTime: Date;
}

const EventBadge: React.FC<EventBadgeProps> = ({ startTime, endTime }) => {
    const currentTime = new Date();
    const startTimeDate = new Date(startTime);
    const endTimeDate = new Date(endTime);
    const isHappening =
        currentTime >= startTimeDate && currentTime <= endTimeDate;

    const isEventToday =
        currentTime.getFullYear() === startTimeDate.getFullYear() &&
        currentTime.getMonth() === startTimeDate.getMonth() &&
        currentTime.getDate() >= startTimeDate.getDate() &&
        currentTime.getDate() <= endTimeDate.getDate();

    return (
        <div className="mt-2 mb-1">
            {isHappening && (
                <IonBadge color="secondary">Happening Now</IonBadge>
            )}
            {isEventToday && !isHappening && (
                <IonBadge color="primary">Happening Today</IonBadge>
            )}
        </div>
    );
};
export default EventBadge;
