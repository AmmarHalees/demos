import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteWithSubRoutes from './components/RouteWithSubRoutes/RouteWithSubRoutes';
import { routes_data } from './utils/routesconfig';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';



function App() {
  return (
    <Fragment>

      <Header />

      <div style={{minHeight:'600px'}}>

        <Switch>

          <Route  path="/">

                <Home/>

          </Route>
          {/* {routes_data.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))} */}
        </Switch>

      </div>


      <Footer />

    </Fragment>
  );
}

export default App;
