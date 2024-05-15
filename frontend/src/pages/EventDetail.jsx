import React from 'react';
import { useRouteLoaderData, json, redirect } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage () {
  const data = useRouteLoaderData('event-detail');
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

export async function action ({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method
  });

  if (!response.ok) {
    throw json(
      { message: 'Not able to delete the event. Please try again later.' },
      { status: 500 }
    );
  }

  return redirect('/events');
}
