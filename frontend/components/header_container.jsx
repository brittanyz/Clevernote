import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => {
  return { currentUser: state.session.currentUser };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
