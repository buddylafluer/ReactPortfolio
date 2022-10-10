import React from 'react';
import Navigation from './navigation';

function Header () {
    return(
        <section className="hero is-info">
        <div className="hero-body columns is-gapless">
            <div className="column is-one-quarter">
                <p className="title is-1">
                    Buddy LaFluer
                </p> 
            </div>
            <div className="column">   
                <Navigation></Navigation>
            </div>
        </div>
    </section>
    );
}

export default Header;