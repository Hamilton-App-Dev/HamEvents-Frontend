import React from "react";
import { IonBadge } from "@ionic/react";
interface EventCardProps {
	startTime: Date;
	endTime: Date;
}

const EventCard: React.FC<EventCardProps> = ({ startTime, endTime }) => {
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
		<div className="happening">
			{isHappening && (
				<IonBadge color="secondary">Happening Now</IonBadge>
			)}
			{isEventToday && !isHappening && (
				<IonBadge color="primary">Happening Today</IonBadge>
			)}
		</div>
	);
};
export default EventCard;
