import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, editNote, createNote } from '../../actions/notes_actions';
import { withRouter, Redirect } from 'react-router-dom';
import NewNote from './new_note';
import ReactQuill from 'react-quill';
// import theme from 'react-quill/dist/quill.snow.css';

class NoteForm extends React.Component {

  constructor(props) {
    super(props);
    let defaultNote = this.props.note || this.props.newNote;
    this.state = {
      id: defaultNote.id,
      title: defaultNote.title,
      body: defaultNote.body,
      notebook_id: defaultNote.notebookId || this.props.notebookId,
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(e){
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (this.props.location.pathname === '/') {
      this.timeoutId = setTimeout(this.handleSubmit, 2000);
    } else if (this.props.match.params.notebookId &&
      this.props.location.pathname === `/notebooks/${this.props.match.params.notebookId}`) {
        this.timeoutId = setTimeout(this.handleSubmit, 2000);
    } else if (this.props.match.params.tagId &&
      this.props.location.pathname === `/tags/${this.props.match.params.tagId}`) {
        this.timeoutId = setTimeout(this.handleSubmit, 2000);
    }
    e.preventDefault();
    this.setState({
      title: e.currentTarget.value,
    });
  }

  handleBody(e){
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (this.props.location.pathname === '/') {
      this.timeoutId = setTimeout(this.handleSubmit, 2000);
    } else if (this.props.match.params.notebookId &&
      this.props.location.pathname === `/notebooks/${this.props.match.params.notebookId}`) {
        this.timeoutId = setTimeout(this.handleSubmit, 2000);
    } else if (this.props.match.params.tagId &&
      this.props.location.pathname === `/tags/${this.props.match.params.tagId}`) {
        this.timeoutId = setTimeout(this.handleSubmit, 2000);
    }

    this.setState({
      body: e
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.note !== undefined) {
      this.setState({id: newProps.note.id || null,
                    title: newProps.note.title,
                    body: newProps.note.body,
                    notebookId: this.props.notebookId});
    }
  }

  handleSubmit(e) {
    if (typeof e !== 'undefined') {
      e.preventDefault();
    }
    if (this.state.body !== "just start typing...") {
      if (this.props.location.pathname.includes('/new')) {
        this.setState({notebook_id: this.props.match.params.notebookId}, () =>
              this.props.submit(this.state).then(() => {
              this.props.history.push('/');
            }));
      } else if (this.props.location.pathname === '/') {
        this.props.submit(this.state).then( ({note}) => {
              this.props.handleClick(note)();
            });
      } else if (this.props.location.pathname.includes('notebooks') &&
                !this.props.location.pathname.includes('new')) {
          this.props.submit(this.state).then( ({note}) => {
            this.props.handleClick(note)();
        });
      } else if (this.props.location.pathname.includes('tags') &&
                !this.props.location.pathname.includes('new')) {
         this.props.submit(this.state).then( ({note}) => {
          this.props.handleClick(note)();
        });
      }
    }
  }

  render() {
    let placeholderTitle = "Title your note";
    let placeholderBody = "just start typing.....";
    if (this.props.location.pathname.includes("tags")) {
      placeholderTitle = '';
      placeholderBody = '';
    }
    return (
      <div className='edit-note-container'>
        <form className='edit-note-form' onSubmit={this.handleSubmit}>
          <div className='quill'>
           </div>
          <input
            className='title'
            type='text'
            value={this.state.title}
            placeholder={placeholderTitle}
            onChange={this.handleTitle} />
          <br></br>
          <ReactQuill
            className='edit-body'
            value={this.state.body}
            onChange={this.handleBody}
            />
          {this.props.button}
        </form>
      </div>
    );
  }
}


export default withRouter(NoteForm);

// <textarea
//   placeholder={placeholderBody}
//   type='text'
//   className='edit-body'
//   onChange={this.handleBody}
//   value={this.state.body}/>


// <ReactQuill
//   className='edit-body'
//   value={this.state.body}
//   onChange={this.handleBody}
//   />



// quill

// css detail (encapsulates quill) is position absolute---
// get snow
// put text area stuff inside of RQ
