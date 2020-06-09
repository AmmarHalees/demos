import React, { Component } from 'react';
import './Home.css';
import Card from '../../components/Card/Card';
import { projectdata } from '../../utils/projectdata';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="homeContainer">


                <section className="banner">


                </section>


                <main>

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


                </main>

                <div>


                </div>


            </div>


        );
    }
}

export default Home;