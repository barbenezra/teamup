import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from './routes';
import TeamupThemeProvider from './TeamupThemeProvider';
import './App.css';

class App extends Component {
  render() {
    const { classes } = this.props;

    return (<Router>
      <TeamupThemeProvider>
        {/* <ul>
          {routes.map(route =>
            <Link key={route.id} to={route.path}>{route.label}</Link>
          )}
        </ul>

        <hr /> */}


        {routes.map(route =>
          <Route key={`route-${route.id}`} path={route.path} exact={route.exact} component={route.component} />
        )}
      </TeamupThemeProvider>
    </Router>
    );
  }
}

export default App;
