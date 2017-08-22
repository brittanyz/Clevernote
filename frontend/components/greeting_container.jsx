import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  return { currentUser: state.session.currentUser };
};

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch(signup()),
  login: () => dispatch(login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
