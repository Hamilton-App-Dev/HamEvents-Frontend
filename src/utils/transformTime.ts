function transformTime(card: { event_time_start: Date; event_time_end: Date }) {
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    let date = new Date(card.event_time_start);
    const formattedStartTime = new Intl.DateTimeFormat("en-US", options).format(
        date
    );

    date = new Date(card.event_time_end);
    const formattedEndTime = new Intl.DateTimeFormat("en-US", options).format(
        date
    );

    const endTime = formattedEndTime.split(",")[2];

    return { start: formattedStartTime, end: endTime };
}

export default transformTime;
