import React from 'react';

const NotesIndexItem = ({note}) => (
  <li className='note-list-item'>
      <p className='note-title'>{note.title}</p>
      <p className='note-body'>{note.body}</p>
  </li>
);

export default NotesIndexItem;
