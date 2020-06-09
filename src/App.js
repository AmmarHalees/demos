import React, { Fragment } from 'react';
import './App.css';
import Home from './containers/Home/Home';
import { Link, Switch } from 'react-router-dom';
import Projects from './containers/Projects/Projects';
import Bus from './containers/Bus/Bus';
import RouteWithSubRoutes from './components/RouteWithSubRoutes/RouteWithSubRoutes';
import ThankYou from './containers/ThankYou/ThankYou';


export const routes = [
  {
      path: "/home",
      component: Home
  },
  {
      path: "/projects",
      component: Projects,
      routes: [
          {
              path: "/projects/bus",
              component: Bus
          }
          ,
          {
              path: "/projects/thankyou",
              component: ThankYou
          }
      
    ]
  }
];

function App() {
  return (
    <Fragment>
      <div>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>

    </Fragment>
  );
}

export default App;
