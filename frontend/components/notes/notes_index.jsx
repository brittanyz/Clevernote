import React from 'react';
import NotesIndexItem from './notes_index_item';
// import TagIndexContainer from '../tags/tags_index_container';
import NewNote from './new_note';
import NoteHeader from './note_header';
import NoteForm from './note_form';
import LeftNavBar from './left_navbar';
import { withRouter } from 'react-router-dom';
import quickSort from './quick_sort';
import NotebooksModal from '../notebooks/notebooks_modal';
import TagsModal from '../tags/tags_modal';
// import NoteTagsIndexItem from '../tags/note_tags_index_item';

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
    this.toggleClassName = this.toggleClassName.bind(this);
    this.setSelectedToNull = this.setSelectedToNull.bind(this);
  }

  componentDidMount () {
    if (this.props.type === "notebook") {
      this.props.fetchNotebook(this.props.match.params.notebookId);
    } else {
      this.props.fetchTags();
      this.props.fetchNotes().then( () => {
        this.setState({
          selectedNote: Object.keys(this.props.notes).reverse[0]});
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.selectedNote && nextProps.notes.length) {
      let sortedNotes = nextProps.notes.filter( (note) => note !== undefined);

      sortedNotes = quickSort(sortedNotes).reverse();
      this.setState({
        selectedNote: sortedNotes[0]
      });
    }

    if (this.props.type === "notebook") {
      if (this.props.match.params.notebookId !== nextProps.match.params.notebookId) {
        this.props.fetchNotebook(nextProps.match.params.notebookId);
      }
    }
  }

  handleClick(note) {
    return (e) => {
      this.setState({
        selectedNote: note
      });
    };
  }

  handleTagClick(id) {
    // ''
    return (e) => {
      this.props.addTagToNote(this.state.selectedNote.id, id);
    };
  }

  toggleClassName() {
    // ''
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

  setSelectedToNull() {
    this.setState({selectedNote: null});
  }

  render() {
    // let notesObj = this.props.notes;
    let notes = this.props.notes;
    // for(let note in notesObj){
    //   notes.push(notesObj[note]);
    // }

    let tags = [];
    // debugger
    for(let tag in this.props.tags){
        if (tag !== undefined){
        tags.push(this.props.tags[tag]);
      }
    }
    // notes = notes.sort((note) => Date.parse(note.updated_at));
    notes = notes.filter( (note) => note !== undefined );

    notes = quickSort(notes);
    notes = notes.reverse();
    // console.log(this.state.selectedNote)

    let header;
    if (this.props.type === 'notebook' && this.props.selectedNotebook) {
      header = <li className='fixed-first-note-w-nb'>
                        <p>{this.props.selectedNotebook.title}</p>
                        <p className="note-count">{notes.length} notes</p>
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
    return(
      <div className='notes-wrapper'>
        <NotebooksModal modalOpen={this.state.notebookModalOpen} closeModal={this.closeModal('notebookModalOpen')}/>
        <TagsModal modalOpen={this.state.tagModalOpen} closeModal={this.closeModal('tagModalOpen')} />
        <LeftNavBar
          defaultNote={this.state.selectedNote || notes[0]}
          openModal={this.openModal}/>

        <ul className='user-notes'>
          {header}

          {notes.map ( (note) => <button
                                    onClick={this.handleClick(note)}
                                    key={note.id}
                                    value={note.id}>
                                    <NotesIndexItem
                                      setSelectedToNull={this.setSelectedToNull}
                                      note={note} />
                                  </button> )}

        </ul>
        <div className='noteform-with-tags'>
          <ul className= 'all-tags'>
            {tags.map ( (tag) => <button
                                  className='tag-names'
                                  onClick={this.handleTagClick(tag.id)}
                                  key={tag.id}
                                  value={tag.id}>
                                  {tag.tag_name}
                                 </button> )}

          </ul>

          <NoteForm
            notes={notes}
            note={this.state.selectedNote || notes[0] || {title: 'Title your note', body: 'just start typing...'}}
            submit={this.props.editNote}
            button={null}
            handleClick={this.handleClick}
            />
        </div>

      </div>

    );
  }
}

// {tags.map ( (tag) => <button
//   className='tag-names'
//   onClick={this.handleTagClick(tag.id)}
//   key={tag.id}
//   value={tag.id}>
//   {tag.tag_name}
// </button> )}

export default withRouter(NotesIndex);




// <TagIndexItem
//   tag={tag} />



// <TagIndexContainer
//   addTagToNote={true}
//   tag={tag} />
// {tags.map ( (tag) => <NoteTagsIndexItem
//                       onClick={this.handleTagClick(tag.id)}
//                       tag={tag}
//                       notes={notes} />)}
// {tags.map ( (tag) => <NoteTagsIndexItem
//                       tag={tag}
//                       selectedNote={this.state.selectedNote}
//                       notes={notes} />)}





// revert!!!!

// {tags.map ( (tag) => <button
//                       className='tag-names'
//                       onClick={this.handleTagClick(tag.id)}
//                       key={tag.id}
//                       value={tag.id}>
//                       {tag.tag_name}
//                      </button> )}
