import React from 'react'
import linkedin from '../images/linkedin.png';
import wpp from '../images/wpp.png';
import perfil from '../images/perfil.png';

const Navbar=()=>{
    return(
        <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container">
             <a href="a" className="navbar-brand">
                 <h1></h1>
                 
                 <p className="font-">Speech Therapist<span> -Student</span></p>
             </a>
             <button type="button" class="navbar-toggler" data-toggle="collapse"data-target="#firstNavbar">
                 <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="firstNavbar">
                 <ul className="navbar-nav ml-auto">
                        
                    <li className="nav-itembtn btn btn-light"><a class="nav-link" href="in-dex.html" ><a> <img class ="size-logo pt-3" src={perfil}  /></a></a></li>
                    
                     <li className="nav-itembtn btn btn-light "><a class="nav-link" href="https://api.whatsapp.com/send?phone=573155025271&text=mensaje"> <a><img class="sizelogo pt-2" src={wpp} /></a> </a></li>
                     

                     <li className="nav-item  btn btn-light"><a class="nav-link" href="https://www.linkedin.com/in/sara-manuela-guisao-vásquez-4ab2b2191/"><a><img class="size_logo pt-3" src={linkedin}/></a> </a></li>
                     
                       
                  </ul>
             </div>
          </div>
     </nav>
    );
}
export default Navbar;