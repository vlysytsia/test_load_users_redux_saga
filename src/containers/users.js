import { connect } from "react-redux";
import { fetchUsers } from "../appRedux/actions/users";
import Users from "../components/Users";

const mapStateToProps = state => ({
  users: state.users.data,
  loading: state.users.loading,
  error: state.users.error
});

const mapDispatchToProps = {
  fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
