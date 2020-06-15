import React from 'react';
 
 
class Problem extends React.Component {

    constructor(props){
        super(props);
        this.image = props.info.n_img;
        this.title = props.info.title;
        this.description = props.info.description;
    }
    render() {

    return (
 
        <div className="mr-3 ml-3 d-flex flex-column justify-content-between h-100">
            <h3 className="text-secondary text-center" style={{fontSize: "2.2rem", fontWeight:"700"}}>{this.title}</h3>
            <div className="">
                <img className="w-100" src={require('../../../../img/problem'+this.image+'.svg')} alt=""/>
            </div>
            <div>
                <p>{this.description}</p>
            </div>
        </div>
 
    )
    
  }
 
}
 
export default Problem;