import React from 'react';
 
 
class Solution extends React.Component {

    constructor(props){
        super(props);
        this.image = props.info.n_img;
        this.title = props.info.title;
        this.description = props.info.description;
    }
    render() {

    return (
 
        <div className="mr-3 ml-3 w-100 d-flex flex-column flex-md-row justify-content-between h-100">
            <div className="col-12 col-md-6 p-0 p-sm-5">
                <img className="w-100" src={require('../../../../img/solution'+this.image+'.svg')} alt=""/>
            </div>
            <div className="col-12 col-md-6 w-md-100 p-0 p-sm-5">
                <h3 className="text-secondary text-center" style={{fontSize: "2.2rem", fontWeight:"700"}}>{this.title}</h3>
                <p>{this.description}</p>
            </div>
        </div>
 
    )
    
  }
 
}
 
export default Solution;