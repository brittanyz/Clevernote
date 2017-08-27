import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import EditNoteForm from './note_form';

class NotesIndexItem extends React.Component{
  constructor (props) {
    super(props);
    this.handleBodyLength = this.handleBodyLength.bind(this);
  }

  handleBodyLength() {
    if (this.props.note.body.length > 150) {
      return this.props.note.body.slice(0, 150) + '.....';
    } else {
      return this.props.note.body;
    }
  }

  render(){
    return (
      <div
        className='note-list-item'>
        <p className='note-title'>{this.props.note.title}</p>
        <p className='note-body'>{this.handleBodyLength()}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  note: ownProps.note,
  selected: ownProps.selected,
});

export default connect(mapStateToProps, null)(NotesIndexItem);
