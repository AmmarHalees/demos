import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes/RouteWithSubRoutes';
import { projectdata } from '../../api/projectdata';
import Card from '../../components/Card/Card';

function Projects({ routes }) {
  return (
    <div>

      <Switch>

        <Route path='/projects' exact>



          <ul className="itemsContainer">

            {projectdata.map((project) => {


              return (

                <li key={project.id}>

                  <Link to={`/projects/${project.link}`}>

                    <Card {...project} />

                  </Link>


                </li>)


            })}


          </ul>
        </Route>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default Projects