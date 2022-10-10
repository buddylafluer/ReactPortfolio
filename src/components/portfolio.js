import React from 'react';
import Project from './project';

function Portfolio (){
    const projArray = [
        {
            title: "Hotel-Weather",
            image: "",
            website: "https://ricardokcontreras.github.io/Hotel-Weather/",
            description: "A simple app for travelers looking to plan according to the weather in a specific destination.",
        },
        {
            title: "",
            image: "",
            website: "",
            description: "",
        },
        {
            title: "",
            image: "",
            website: "",
            description: "",
        }
    ]
    
    return(
        <section id="Work" class="section">
            <div class="columns is-variable is-8">
                <div id= "column-border" class="column is-one-quarter">
                    <h1 id="section" class="title is-2">Projects</h1>
                </div>
                {projArray.map(project => {return <Project project></Project>})}
            </div>
        </section>    
    );
}

export default Portfolio;