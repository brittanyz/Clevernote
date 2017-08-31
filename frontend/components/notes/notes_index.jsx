import React from 'react';
import NotesIndexItem from './notes_index_item';
import NewNote from './new_note';
import NoteHeader from './note_header';
import NoteForm from './note_form';
import LeftNavBar from './left_navbar';
import { withRouter } from 'react-router-dom';
import quickSort from './quick_sort';
import NotebooksModal from '../notebooks/notebooks_modal';
import TagsModal from '../tags/tags_modal';

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    let notebook = this.props.type === "notebook" ? this.props.selectedNotebook : null;

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selectedNotebook: notebook,
      selectedNote: null,
      notebookModalOpen: false,
      tagModalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount () {
    if (this.props.type === "notebook") {
      this.props.fetchNotebook(this.props.match.params.notebookId);
    } else {
      this.props.fetchTags();
      this.props.fetchNotes().then( () => {
        this.setState({selectedNote: Object.keys(this.props.notes).reverse[0]});
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.type === "notebook") {
      if (this.props.match.params.notebookId !== nextProps.match.params.notebookId) {
        this.props.fetchNotebook(nextProps.match.params.notebookId);
      }
    }
  }

  handleClick(id) {
    return (e) => {
      this.setState({
        selectedNote: id
      });
    };
  }

  handleTagClick(id) {
    return (e) => {
      this.setState({
        selectedTag: id
      });
    };
  }

  openModal(type) {
    return (e) => {
      this.setState({
        [type]: true,
      });
    };
  }


  closeModal(type) {
    return (e) => {
      this.setState({
        [type]: false,
      });
    };
  }

  render() {
    debugger
    let header;
    if (this.props.type === 'notebook' && this.props.selectedNotebook) {
      header = <li className='fixed-first-note-w-nb'>
                        <p>{this.props.selectedNotebook.title}</p>
                        <p className="note-count">{this.props.noteCount} notes</p>
                      </li>;
    } else if (this.props.type === 'tag' && this.props.selectedTag) {
      header = <li className='fixed-first-note-w-tag'>
                        <p>Tag: {this.props.selectedTag.tag_name}</p>
                        <p className="note-count">{this.props.selectedTag.note_ids.length} notes</p>
                      </li>;
    } else {
      header = <li className='fixed-first-note'>
                        <p>NOTES</p>
                        <p className="note-count">{this.props.noteCount} notes</p>
                      </li>;
    }
    let notes = [];
    for(let note in this.props.notes){
      notes.push(this.props.notes[note]);
    }

    let tags = [];
    for(let tag in this.props.tags){
      tags.push(this.props.tags[tag]);
    }
    // notes = notes.sort((note) => Date.parse(note.updated_at));
    notes = quickSort(notes);
    notes = notes.reverse();

    return(
      <div className='notes-wrapper'>
        <NotebooksModal modalOpen={this.state.notebookModalOpen} closeModal={this.closeModal('notebookModalOpen')}/>
        <TagsModal modalOpen={this.state.tagModalOpen} closeModal={this.closeModal('tagModalOpen')} />
        <LeftNavBar openModal={this.openModal}/>

        <ul className='user-notes'>
          {header}
          {notes.map ( (note) => <button
                                    onClick={this.handleClick(note.id)}
                                    key={note.id}
                                    value={note.id}>
                                      <NotesIndexItem
                                      note={note} />
                                  </button> )}
        </ul>
        <div className='noteform-with-tags'>
          <ul className= 'user-tags'>
            {tags.map ( (tag) => <button
                                    className="tag-buttons"
                                    onClick={this.handleTagClick(tag.id)}
                                    key={tag.id}
                                    value={tag.id}>
                                    {tag.tag_name}
                                 </button> )}
          </ul>

          <NoteForm
            notes={notes}
            note={this.props.notes[this.state.selectedNote] || notes[0] || {title: 'Title your note', body: 'just start typing...', notebook_id: null }}
            submit={this.props.editNote}
            button={null}
            />
        </div>

      </div>

    );
  }
}


export default withRouter(NotesIndex);

// <TagIndexItem
//   tag={tag} />
