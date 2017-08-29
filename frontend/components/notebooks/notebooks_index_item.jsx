import React from 'react';
import { deleteNotebook } from '../../actions/notebooks_actions';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { withRouter, Link } from 'react-router-dom';


class NotebookIndexItem extends React.Component{
  constructor(props) {
    super(props);
    // debugger
  }

  render() {
    return(
      <li className='notebook-list-item' >
        <Link onClick={this.props.closeModal}
          to={`/notebooks/${this.props.notebook.id}`}>
          <p className='notebook-title'>{this.props.notebook.title}</p>
          <p className='notebook-notecount'>
            {this.props.notebook.noteCount} notes</p>
        </Link>
      </li>
    );
  }
}

// export default NotebookIndexItem;

const mapStateToProps = (state, passedProps) => {
  // debugger
  return {
    notebook: passedProps.notebook,
    selectedId: passedProps.selected,
  };
};

const mapDispatchToProps = dispatch => ({
  deleteNotebook: (id) => dispatch(deleteNotebook(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotebookIndexItem));
