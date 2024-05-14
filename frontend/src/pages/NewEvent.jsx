import React from 'react';
import EventForm from '../components/EventForm';
import { json, redirect } from 'react-router-dom';

function NewEventPage () {
  return <EventForm />;
}

export default NewEventPage;

export async function action ({ request, params }) {
  const data = await request.formData();
  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description')
  };
  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw json({ message: 'Something went wrong. Please try again later.' }, { status: 500 });
  }

  return redirect('/events');
}
