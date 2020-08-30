import React from 'react';
import Login from './app/pages/login';
import SingUp from './app/pages/sign_up';
import Intro from './app/pages/intro/';
import Selection from './app/pages/selection';
import Profile from './app/pages/profile';
import Feed from './app/pages/feed';
import EditProfile from './app/pages/editProfile';
import CompareProfiles from './app/pages/compareProfiles';
import Chatlist from './app/pages/chatList';
import Chat from './app/pages/chat';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/chat'>
          <Chat />
        </Route>
        <Route path='/chat-lista'>
          <Chatlist />
        </Route>
        <Route path='/feed'>
          <Feed />
        </Route>
        <Route path='/perfil/comparar'>
          <CompareProfiles />
        </Route>
        <Route path='/perfil/edit'>
          <EditProfile />
        </Route>
        <Route path='/perfil'>
          <Profile />
        </Route>
        <Route path='/selecao'>
          <Selection />
        </Route>
        <Route path='/intro'>
          <Intro />
        </Route>
        <Route path='/cadastro'>
          <SingUp />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
