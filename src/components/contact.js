import React from 'react';

function Contact (){
    return(
        <div>
            <p className='title'>
                Contact Me:
            </p>
            <p className='subtitle'>Name</p>
            <input></input>
            <p className='subtitle'>Email</p>
            <input></input>
            <p className='subtitle'>Message</p>
            <textarea className='textarea' placeholder=' ' rows="10"></textarea>
            <button className='button is-medium'>Submit</button>
        </div>
    );
}

export default Contact;