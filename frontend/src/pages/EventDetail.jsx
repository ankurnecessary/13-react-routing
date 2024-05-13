import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetailPage () {
  const params = useParams();
  return (
    <>
      <h1>Event Detail</h1>
      <p>{params.eventId}</p>
    </>
  );
}

export default EventDetailPage;

export async function loader ({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${eventId}`);

  if (!response.ok) {
    throw json({ message: 'Not able to fetch event detail. Please try again later.' }, { status: 500 });
  } else {
    return response;
  }
}
