
import ThankYou from '../containers/ThankYou/ThankYou';
import Main from '../containers/Projects/Main/Main';
import NotFound from '../containers/NotFound/NotFound';
import Projects from '../containers/Projects/Projects';
import Bus from '../containers/Bus/Bus';
import Home from '../containers/Home/Home';

export const routes_data = [
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