import { Card } from "../types";

function createGoogleCalendarLink(card: Card) {
	// https://stackoverflow.com/questions/10488831/link-to-add-to-google-calendar
	const eventName = encodeURIComponent(card.name);
	const eventStart = encodeURIComponent(
		new Date(card.event_time_start)
			.toISOString()
			.replace(/-|:|\.\d\d\d/g, "")
	);
	const eventEnd = encodeURIComponent(
		new Date(card.event_time_end).toISOString().replace(/-|:|\.\d\d\d/g, "")
	);
	console.log(eventStart);
	console.log(eventEnd);
	const eventDetails = encodeURIComponent(
		`For details, link here: ${card.description}`
	);
	const eventLocation = encodeURIComponent(card.location);

	const link = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventName}&dates=${eventStart}/${eventEnd}&details=${eventDetails}&location=${eventLocation}&sf=true&output=xml`;

	return link;
}

export default createGoogleCalendarLink;
