import React from 'react';

function Resume (){
    return(
        <div>
            <p className='title'>
                <a href=" ">Download my resume</a>
            </p>
            <p className='title'>Front-End Skills</p>
            <p className='subtitle'>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQeury</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </p>
            <p className='title'>Back-End Skills</p>
            <p className='subtitle'>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </p>
        </div>
    );
}

export default Resume;