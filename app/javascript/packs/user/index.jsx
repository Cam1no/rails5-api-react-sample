import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchUsers } from './actions/index';
import { connect } from 'react-redux';
// const propTypes = {
//   example: PropTypes.string,
// };

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

  componentWillMount = () => {
    this.fetchUsersFromDatabase()
  }

  render() {
    return(
      <table>
        <tr>
          <th>first_name</th>
          <th>last_name</th>
          <th>email</th>
        </tr>
        {
          this.props.users.map((user, i) => {
            return (
              <tr key={`user-${i}`}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })
        }
      </table>
    );
  }
}

const mapStateToProps = state => state.users


export default connect(mapStateToProps, { fetchUsers })(User);

// User.propTypes = propTypes;
