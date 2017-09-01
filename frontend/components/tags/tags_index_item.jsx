import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { withRouter, Link } from 'react-router-dom';
import { deleteTag } from '../../actions/tags_actions';

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='tag-list-item' >
        <Link onClick={this.props.closeModal}
          to={`/tags/${this.props.tag.id}`}>
          <p className='tag-name'>{this.props.tag.tag_name}</p>
        </Link>
      </li>
    );
  }
}

export default TagIndexItem;

// const mapStateToProps = (state, passedProps) => {
//   return {
//     tag: passedProps.tag,
//     selectedId: passedProps.selected,
//   };
// };
//
// const mapDispatchToProps = dispatch => ({
//   deleteNotebook: (id) => dispatch(deleteTag(id)),
// });
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TagIndexItem));
