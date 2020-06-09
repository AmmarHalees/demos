import React from 'react';
import { Link, Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes/RouteWithSubRoutes';

function Projects({ routes }) {
    return (
      <div>
        <h2>Tacos</h2>
        <ul>
          <li>
            <Link to="/projects/bus">Bus</Link>
          </li>
          <li>
            <Link to="/projects/thankyou">ty</Link>
          </li>
        </ul>
  
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    );
  }

  export default Projects