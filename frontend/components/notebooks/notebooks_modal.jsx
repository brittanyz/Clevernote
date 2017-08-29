import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { withRouter } from 'react-router-dom';
import Notebooks from './notebooks_index';
import { fetchNotebook,
        fetchNotebooks,
        createNotebook,
        deleteNotebook} from '../../actions/notebooks_actions';

const mapStateToProps = (state) => {
  // debugger
  return {
  notebooks: state.notebooks,
  currentUser: state.session.current_user,
  selectedNotebook: null,
};
};

const mapDispatchToProps = dispatch => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
  createNotebook: (notebookData) => dispatch(createNotebook(notebookData)),
  deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notebooks);
