import React from 'react';
import { projectdata } from '../../../utils/projectdata';
import Card from '../../../components/Card/Card';
import { Link } from 'react-router-dom';


const Main  = () => {
    return (

        
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
      );
}
 
export default Main;