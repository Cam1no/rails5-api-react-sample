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
    console.log(this.props);
    return(
      <div>
        <ul>
          {
            this.props.users.map((user, i) => {
              return (
                <li key={`user-${i}`}>{user.first_name}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => state.users


export default connect(mapStateToProps, { fetchUsers })(User);

// User.propTypes = propTypes;
