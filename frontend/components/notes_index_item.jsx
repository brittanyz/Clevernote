import React from 'react';

const NotesIndexItem = ({note}) => (
  <li>
    <h3>{note.title}</h3>
    <p>{note.body}</p>
  </li>
);

export default NotesIndexItem;
