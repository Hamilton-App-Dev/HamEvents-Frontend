import React, { FC } from 'react';
interface Props {
	data: {
		id: string;
		name: string;
		description: string;
		cover_img: string;
		event_time_start: Date;
		event_time_end: Date;
		location: string;
		food: boolean;
		cancelled: boolean;
	}[]
}
const Details: FC<Props> = ({ data }) => {
    return (
      <div>
        <h1>Details Page</h1>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Details;