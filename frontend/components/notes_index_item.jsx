import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import EditNoteForm from './edit_note_form';

class NotesIndexItem extends React.Component{
  constructor (props) {
    super(props);
    // debugger;
    // this.state = ({
    //   selected: false
    // })
    // this.handleClick = this.handleClick.bind(this);
  }
  //
  // handleClick(e){
  //   console.log(this.props.note.id);
  //   return (
  //     <EditNoteForm
  //       selectedNoteId={this.props.note.id} />
  //   );
  // }

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

// onClick={this.handleClick}
// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(mapStateToProps, null)(NotesIndexItem);
