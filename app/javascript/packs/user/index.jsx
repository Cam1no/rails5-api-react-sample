import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchUsers, deleteUser } from './actions/index';
import { connect } from 'react-redux';

const propTypes = {
  fetchUsers: PropTypes.func,
  users: PropTypes.array,
};

class User extends Component {
  constructor(props){
  	super(props);
  }

  fetchUsersFromDatabase = () => {
    fetch('/users')
      .then(res => res.json())
      .then(res => {
        return this.props.fetchUsers(res)
      })
  }

  handleDeleteButton = user_id => {
    fetch(`/users/${user_id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(res => {
        return this.props.deleteUser(user_id)
      })
  }

  componentWillMount = () => {
    this.fetchUsersFromDatabase()
  }

  render() {
    return(
      <table>
        <tr>
          <th>ID</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>email</th>
          <th>gender</th>
          <th>削除</th>
        </tr>
        {
          this.props.users.map((user, i) => {
            return (
              <tr key={`user-${i}`}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td><button onClick={() => this.handleDeleteButton(user.id)}>削除</button></td>
              </tr>
            );
          })
        }
      </table>
    );
  }
}

const mapStateToProps = state => state.users

export default connect(mapStateToProps, { fetchUsers, deleteUser })(User);

User.propTypes = propTypes;
