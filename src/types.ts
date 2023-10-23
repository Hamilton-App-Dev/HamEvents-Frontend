export type Card = {
	id: string;
	name: string;
	description: string;
	organization: string;
	cover_img: string;
	event_time_start: Date;
	event_time_end: Date;
	location: string;
	food: boolean;
	cancelled: boolean;
};
