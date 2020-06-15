import React from 'react';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class BarraNav extends React.Component {
 
    render() {
   
     return (

        <nav className="sticky-top p-0 pr-5 pl-3 navbar navbar-expand-lg navbar-light bg-light">
            <nav className="w-50 navbar navbar-light bg-light">
                <a style={{fontSize:30, fontWeight:500}} className="navbar-brand ml-3" href="#">SOGI</a>
            </nav>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faChevronCircleDown} />
            </button>
            <div className="justify-content-end flex-shrink-1 collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#problems">Problemática<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#solutions">Nuestra Solución</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#team">Quienes Somos</a>
                    </li>
                </ul>
            </div>
        </nav>

     )
      
    }
   
  }
   
  export default BarraNav;