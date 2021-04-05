import React from 'react';


const Navbar = ({navbarTitle}) =>{
    return (
        <nav class="navbar font-nunito-bold background-black border-bottom-purple navbar-dark bg-dark">
            <div className="container">
                <a class="navbar-brand" href="#">{navbarTitle}</a>
            </div>
        </nav>
    );
}

export default Navbar;