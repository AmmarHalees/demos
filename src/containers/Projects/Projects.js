import React from 'react';
import {Switch} from 'react-router-dom';
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes/RouteWithSubRoutes';
import './Projects.css'

function Projects({ routes }) {
  return (
    <div className='projectsContainer'>
      <Switch>

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default Projects