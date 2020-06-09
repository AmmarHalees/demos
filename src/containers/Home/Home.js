import React, { Component } from 'react';
import './Home.css';
import Card from '../../components/Card/Card';
import { projectdata } from '../../api/projectdata';

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

                                    <Card {...project} />


                                </li>)


                        })}


                    </ul>


                </main>


            </div>


        );
    }
}

export default Home;