import React from 'react';
import './../../../../others.css';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Member extends React.Component {

    constructor(props){
        super(props);
        this.image = props.info.n_img;
        this.title = props.info.title;
        this.career = props.info.career;
        this.description = props.info.description;
    }
    render() {

    return (
 
        <div className="card mb-5 col-12 p-0" style={{border: "None"}} >
          <div className="flex-column flex-sm-row no-gutters align-items-center shadow-none border-none">
            <div style={{left:"-80px", top:"10px", width:"150px",height:"150px", zIndex:"1"}} className="ml-5 z3 position-absolute col-md-4">
              <div className="rounded-circle">
                  <img src={require('../../../../img/member'+this.image+'.jpg')} className="img-fluid shadow-lg rounded-circle card-img" alt="..."></img>
              </div>
            </div>
            <div className="col-md-12 ml-5 p-0 bg-light shadow">
              <div style={{marginLeft:"80px"}} className="card-body">
                <h5 className="text-primary card-title">{this.title}</h5>
                <p className="card-text"><small className="text-muted">{this.career}</small></p>
                <p className="card-text">{this.description}</p>
              </div>
            </div>
          </div>
        </div>
 
    )
    
  }
 
}
 
export default Member;