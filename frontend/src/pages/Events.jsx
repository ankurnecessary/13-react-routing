import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DUMMY_EVENTS = [
  { id: 'e1', title: 'Event 1' }, { id: 'e2', title: 'Event 2' }];
function EventsPage () {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}

export default EventsPage;
