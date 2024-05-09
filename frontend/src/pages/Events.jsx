import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DUMMY_EVENTS = [{ id: 1, name: 'Event 1' }, { id: 2, name: 'Event 2' }];
function EventsPage () {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}

export default EventsPage;
