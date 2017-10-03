import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import TagIndexItem from './tags_index_item';
import { fetchTag,
        fetchTags,
        createTag,
        deleteTag} from '../../actions/tags_actions';
import { fetchNotes } from '../../actions/notes_actions';

class TagsModal extends React.Component {
  constructor(props) {
    super(props);

    this.customStyles = {
      content : {
        top: '0',
        left: '0',
        right: '65%',
        bottom: '0',
      }
    };

    this.closeTagModal = this.closeTagModal.bind(this);
    this.openTagModal = this.openTagModal.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  openTagModal() {
    this.setState({
      modalOpen: true,
    });
  }

  closeTagModal() {
    this.setState({
      modalOpen: false,
    });
  }

  handleTagClick(id) {
    return (e) => {
      this.setState({
        selectedTag: id
      });
    };
  }

  removeTag(id) {
    return (e) => {
      this.props.deleteTag(id)
    };
  }

  componentDidMount() {
    this.props.fetchTags();
  }

  componentWillMount() {
    this.setState({
      notebooks: this.props.fetchTags(),
    });
  }

  render() {
    // let trash =
    let tags = [];
    for(let tag in this.props.tags) {
      tags.push(this.props.tags[tag]);
    }
    return (
      <div className='tags-modal' >
        <Modal contentLabel="Modal"
               style={this.customStyles}
               isOpen={this.props.modalOpen}
               onRequestClose={this.props.closeModal}
               >
          <ul className='tags-list'>
            <li className='fixed-first-tag'>
              <p>TAGS</p>
              <Link to='/tags/new' className='add-tag'>+</Link>
            </li>
            {tags.map ( (tag) => <button
                                    className='tag-item'
                                    key={tag.id}
                                    onClick={this.handleTagClick(tag.id)}>
                                    <TagIndexItem
                                      tagId={tag.id}
                                      deleteTag={this.props.deleteTag}
                                      addTagToNote={false}
                                      closeTag={this.props.closeModal}
                                      tag={tag}/>
                                  </button> )}
          </ul>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // <img className="trash" onClick={this.removeTag(tag.id)} src={window.images.trash} />
  // author: state.session.current_user,
  // notes: state.session.current_user.notes.tags
  return {
  tags: state.tags,
  currentUser: state.session.current_user,
  selectedNotebook: null,
  };
};

const mapDispatchToProps = dispatch => ({
  deleteTag: (tagId) => dispatch(deleteTag(tagId)),
  fetchTags: () => dispatch(fetchTags()),
  fetchTag: (tagId) => dispatch(fetchTag(tagId)),
  fetchNotes: () => dispatch(fetchNotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagsModal);
