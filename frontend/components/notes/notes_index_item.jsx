import React from 'react';
import { deleteNote } from '../../actions/notes_actions';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import EditNoteForm from './note_form';
import { withRouter } from 'react-router-dom';

class NotesIndexItem extends React.Component{
  constructor (props) {
    super(props);
    this.handleBodyLength = this.handleBodyLength.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleBodyLength() {
    if (this.props.note.body.length > 150) {
      return this.props.note.body.slice(0, 135) + '.....';
    } else {
      return this.props.note.body;
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteNote(this.props.note.id);
  }

  componentDidMount() {
    // debugger
  }

  render(){
    return (
      <div
        className='note-list-item'>
        <div className='title-and-delete'>
          <p className='note-title'>{this.props.note.title}</p>
            <img className="trash" onClick={this.handleClick} src={window.images.trash} />
        </div>
        <p className='note-body'>{this.handleBodyLength()}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  note: ownProps.note,
  selected: ownProps.selected,
});

const mapDispatchToProps = dispatch => ({
  deleteNote: (id) => dispatch(deleteNote(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotesIndexItem));
