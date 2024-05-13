import React from 'react';
import { useLoaderData, json } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage () {
  const data = useLoaderData();
  return (
    <>
      <EventItem event={data.event} />
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
