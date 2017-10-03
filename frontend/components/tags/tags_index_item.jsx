import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { withRouter, Link } from 'react-router-dom';
import { deleteTag } from '../../actions/tags_actions';

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTag(id) {
    return (e) => {
      this.props.deleteTag(id);
    };
  }

  render() {
    return (
      <li className='tag-list-item' >
        <Link onClick={this.props.closeModal}
          to={`/tags/${this.props.tag.id}`}>
          <p className='tag-name'>{this.props.tag.tag_name}</p>
          <p className='tag-note-count'>notes: {this.props.tag.noteCount}</p>
        </Link>
        <img className="trash" onClick={this.removeTag(this.props.tagId)} src={window.images.trash} />
      </li>
    );
  }
}

export default TagIndexItem;
