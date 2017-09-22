import React from 'react';
import { deleteNotebook } from '../../actions/notebooks_actions';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { withRouter, Link } from 'react-router-dom';


class NotebookIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedNotebook: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteNotebook(this.props.notebook.id);
    // this.props.deleteNotebook(this.props.notebook.id).then(
    //   this.props.history.push('/')
    // );
  }

  getTrash() {

  }

  render() {
    let trash = null;
    if (this.props.notebook.title !== "Default Notebook") {
      trash = <img className="trash" onClick={this.handleClick} src={window.images.trash} />
    }

    return(
      <li className='notebook-list-item' >
        <Link onClick={this.props.closeModal}
          to={`/notebooks/${this.props.notebook.id}`}>
          <div className='title-and-delete'>
          <p className='notebook-title'>{this.props.notebook.title}</p>
          {trash}
          </div>
          <p className='notebook-notecount'>
            {this.props.notebook.noteCount} notes</p>
        </Link>
      </li>
    );
  }
}

// export default NotebookIndexItem;

const mapStateToProps = (state, passedProps) => {
  return {
    closeModal: passedProps.closeModal,
    notebook: passedProps.notebook,
    selectedId: passedProps.selected,
  };
};

const mapDispatchToProps = dispatch => ({
  deleteNotebook: (id) => dispatch(deleteNotebook(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotebookIndexItem));
