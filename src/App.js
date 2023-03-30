import React from 'react';
import './App.css';

import {connect} from 'react-redux';

import Update_Person from './store/actions/PersonActions';
import Update_Game from './store/actions/GameActions';
import Fetch_User from './store/actions/UserActions';

const App = props => {
  
  const {
    person,
    game,
    users,
    update_person,
    update_game,
    fetchUsers
  } = props;

  return (
    <div className="App">
      <h1>Redux Demo</h1>
      Person Name: {person.name ? person.name : ''}

      <button onClick={update_person}>Update Person</button>
      
      <br />
      
      Game Name: {game.name ? game.name : ''}

      <button onClick={update_game}>Update Game</button>

      <br />

      Users: <button onClick={fetchUsers}>Fetch Users</button>
      {
        users.length === 0 ?
          (<p>No Users Found</p>) :
          users.map(user => (<p key={user.id}>{user.first_name} {user.last_name}</p>))
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    person: state.person,
    game: state.game,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update_person: () => {
      dispatch(Update_Person);
    },
    update_game: () => {
      dispatch(Update_Game);
    },
    fetchUsers : () => {
      dispatch(Fetch_User);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
