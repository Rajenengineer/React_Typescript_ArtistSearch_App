import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import SearchPage from '../../components/pages/SearchPage';
import ArtistPage from '../../components/pages/ArtistPage';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <Redirect to="/artists" />
          </Route>
          <Route exact path="/artists/">
            <SearchPage />
          </Route>
          <Route exact path="/artists/:name">
            <ArtistPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
