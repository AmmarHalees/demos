import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes/RouteWithSubRoutes';
import './Projects.css'
import Bus from '../Bus/Bus';
import ThankYou from '../ThankYou/ThankYou';
import Main from './Main/Main';

function Projects({ routes }) {
  return (
    <div className='projectsContainer'>
      <Switch>


        <Route path="/projects/bus">

          <Bus />

        </Route>


        <Route path="/projects/thankyou">

          <ThankYou />

        </Route>



        <Route path="/projects">

          <Main />

        </Route>


      </Switch>

      {/* <Switch>

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch> */}
    </div>
  );
}

export default Projects