function transformTime(card: { event_time_start: { toString: () => string; }; event_time_end: { toString: () => string; }; }) {
    var startTimeTrim, endTimeTrim, startTime, endTime;
      startTimeTrim = card.event_time_start.toString().trim().split("T");
      endTimeTrim = card.event_time_end.toString().trim().split("T");
      startTime = startTimeTrim[0] + ", " + startTimeTrim[1].slice(0,5);
      endTime = endTimeTrim[0] + ", " + endTimeTrim[1].slice(0,5);
      if (endTimeTrim[0] === startTimeTrim[0]){
          endTime = endTimeTrim[1].slice(0,5);
      }
    return {"start": startTime, "end": endTime};
  }
export default transformTime;