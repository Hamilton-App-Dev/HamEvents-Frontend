const options: Intl.DateTimeFormatOptions = {
	weekday: "long",
	day: "numeric",
	month: "numeric",
	hour: "numeric",
	minute: "numeric",
	hour12: true,
};

function transformTime(card: { event_time_start: Date; event_time_end: Date }) {
	var date = new Date(card.event_time_start);
	var formattedStartTime = new Intl.DateTimeFormat("en-US", options).format(
		date
	);

	date = new Date(card.event_time_end);
	var formattedEndTime = new Intl.DateTimeFormat("en-US", options).format(
		date
	);

	var endTime = formattedEndTime.split(",")[2];

	return { start: formattedStartTime, end: endTime };
}
export default transformTime;
