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
    this.convertTime = this.convertTime.bind(this);
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

  convertTime(){
    
    const timeArray = this.props.note.updated_at.split('T');
    // ["2017-08-28", "18:44:14.672Z"]
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    let yearCreated = parseInt(timeArray[0].split('-')[0]);
    let monthCreated = parseInt(timeArray[0].split('-')[1]);
    let dayCreated = parseInt(timeArray[0].split('-')[2]);
    let hourCreated = parseInt(timeArray[1].split(':')[0]) - 4;
    let minuteCreated = parseInt(timeArray[1].split(':')[1]);

    if (year - yearCreated === 0 && month - monthCreated === 0 && day - dayCreated === 0) {
      if (hour - hourCreated === 0) {
        return (minutes - minuteCreated < 2) ? "seconds ago" : `${minutes - minuteCreated} minutes ago`;
      } else {
        return (hour - hourCreated < 2) ? "about one hour ago" : `${hour - hourCreated} hours ago`;
      }
    }

    if (year - yearCreated === 0 && month - monthCreated === 0) {
      return `${day - dayCreated} days ago`;
    } else if (year - yearCreated === 0 && month - monthCreated > 0) {
      return `${month - monthCreated} months ago`;
    } else { return `${year - yearCreated} year ago`; }

  }


  render(){
    return (
      <div
        className='note-list-item'>
        <div className='title-and-delete'>
          <p className='note-title'>{this.props.note.title}</p>
            <img className="trash" onClick={this.handleClick} src={window.images.trash} />
        </div>
        <p className='updated_at'>last updated: {this.convertTime()}</p>
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
