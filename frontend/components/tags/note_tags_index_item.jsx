// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchTags, fetchTag } from '../../actions/tags_actions';
// import { addTagToNote } from '../../actions/notes_actions';
// // import NotesIndex from '../notes/notes_index';
//
// export default class NoteTagsIndexItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleTagClick = this.handleTagClick.bind(this);
//   }
//
//   handleTagClick(id) {
//     // ''
//     return (e) => {
//       addTagToNote(this.props.selectedNote.id, id);
//     };
//   }
//
//   render() {
//     return (
//       <button
//         onClick={this.handleTagClick(this.props.tag.id)}
//         className='tag-names'
//         key={this.props.tag.id}
//         value={this.props.tag.id}>
//         {this.props.tag.tag_name}
//       </button>
//     );
//   }
// }
