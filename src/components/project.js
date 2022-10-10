import React from 'react';

function Project (project){
    console.log(project)
    return(
        <div class="column" key={project.name}>
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by2">
                        <img src={`../assets/images/${project.image}`}></img>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <a href={project.website}>{project.name}</a>
                    </div>
                    <div>{project.description}</div>
                </div>
            </div>
        </div>
    );
}

export default Project;