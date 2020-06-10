import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteWithSubRoutes from './components/RouteWithSubRoutes/RouteWithSubRoutes';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';
import Bus from './containers/Bus/Bus';
import ThankYou from './containers/ThankYou/ThankYou';
import Main from './containers/Projects/Main/Main';
import NotFound from './containers/NotFound/NotFound';

const routes_data = [
  {
    path: ['/home', '/', '/ammar'],
    component: Home,
    exact: true

  },
  {
    path: "/projects",
    component: Projects,
    routes: [

      {
        path: "/projects/bus",
        component: Bus,

      }
      ,
      {
        path: "/projects/thankyou",
        component: ThankYou,

      }
      ,

      {
        path: "/projects",
        component: Main,
        // exact:true

      }

    ]
  }
  ,
  {
    component: NotFound,
  }
];

function App() {
  return (
    <Fragment>

      <Header />

      <div style={{minHeight:'600px'}}>

        <Switch>
{/* 
          <Route  path="/">

                <Home/>

          </Route> */}
          {routes_data.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>

      </div>


      <Footer />

    </Fragment>
  );
}

export default App;
