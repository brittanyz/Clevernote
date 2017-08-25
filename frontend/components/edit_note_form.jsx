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
    debugger;
    let me = this.props.notes;
    console.log(me);
  }

  render() {
    return (
      <div className='new-note-container'>
        <form className='new-note-form'>
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
