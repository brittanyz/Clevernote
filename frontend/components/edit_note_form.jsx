import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, editNote } from '../actions/notes_actions';

class EditNoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body:'',
      notebook_id: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(inputType){
    return (e) => {
      e.preventDefault();
      this.setState({
        // why is this in brackets???
        [inputType]: e.currentTarget.value,
      });
    };
  }

  componentWillMount () {
    let me = this.props.notes;
    console.log(me);
  }

  handleSubmit(e) {
    e.preventDefault();
    // will break... need to worry about mounting the default note first
    // so I can grab the id (thats what my edit action needs)
    this.props.editNote(this.state);
  }

  render() {
    return (
      <div className='edit-note-container'>
        <form className='edit-note-form' onSubmit={this.handleSubmit}>
          <input
            className='title'
            type='text'
            value="whatever for now...."
            onChange={this.handleChange('title')} />
          <br></br>
          <input
            className='body'
            type='textarea'
            onChange={this.handleChange('body')} />
          <input
            className='edit-submit'
            type='submit'
            value='temporary submit' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes };
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  editNote: note => dispatch(editNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditNoteForm);
