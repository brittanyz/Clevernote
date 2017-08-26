import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import EditNoteForm from './edit_note_form';

class NotesIndexItem extends React.Component{
  constructor (props) {
    super(props);
}

  render(){
    return (
      <div
        className='note-list-item'>
        <p className='note-title'>{this.props.note.title}</p>
        <p className='note-body'>{this.props.note.body}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  note: ownProps.note,
  selected: ownProps.selected,
});

export default connect(mapStateToProps, null)(NotesIndexItem);
