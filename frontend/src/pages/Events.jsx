import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage () {
  const data = useLoaderData();
  const events = data.events;

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader () {
  const response = await fetch('http://localhost:8080/events1');
  if (!response.ok) {
    throw new Error({ message: 'Could not fetch events.' });
  } else {
    // React router can handle Response{} object. So, we need not to extract data via response.json()
    return response;
  }
}
