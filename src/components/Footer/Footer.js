import React from 'react';

const Footer = ({footerTitle}) =>{
    return (
        <footer class="bg-light mt-3 font-nunito-bold background-black border-top-purple text-center text-lg-start">
            <div class="text-center p-3" >
                <p class="" href="#">{footerTitle}</p>
            </div>
        </footer>
    );
}

export default Footer;