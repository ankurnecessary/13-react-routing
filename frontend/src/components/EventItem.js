import React from 'react';
import { Link, useSubmit } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './EventItem.module.css';

function EventItem ({ event }) {
  const submit = useSubmit();
  function startDeleteHandler () {
    const proceed = window.confirm('Are your sure?');
    if (proceed) {
      // we can use 'action' here if we want to use the action function of some other route.
      // Otherwise it will use the action function of same route
      // null mentioned below is so because we are not sending any data to the action function
      // If we want to send any data then we will replace null with that data

      // submit(null, { method: 'DELETE', action: '/a-different-path' });
      submit(null, { method: 'DELETE' });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

EventItem.propTypes = {
  event: PropTypes.object
};

export default EventItem;
