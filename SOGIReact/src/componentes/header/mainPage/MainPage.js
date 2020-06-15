import React from 'react';
import carousel1 from './../../../img/carousel1.jpg';
import carousel2 from './../../../img/carousel2.jpg';
import carousel3 from './../../../img/carousel3.jpg';
import './../../../others.css';
 
class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "450px",
            fit: "cover",
            // Intervalo de tiempo entre cambio de imagen de carousel
            timeInterval: "1000",
            // Efecto desenfoque para las imágenes del carousel
            blur: "blur(8px)"
        }
    }
    render() {

    return (
 
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                <div  data-interval={this.state.timeInterval} className="carousel-item active">
                  <div className="gradient d-flex text-center flex-column justify-content-center align-items-center">
                    <h1 className="z3" style={{fontSize:"5.5rem", fontWeight:"800", color:"#fff", marginTop:"-100px"}}>SOGI</h1>
                    <h2 className="z3" style={{fontSize:"2rem", fontWeight:"800", color:"rgba(255,255,255,0.85)", marginTop:"0px"}}>Sistema para la optimización de la Gestión intrahospitalaria</h2>
                  </div>
                  <img  src={carousel1} style={{objectFit:this.state.fit, height: this.state.height, filter:this.state.blur}} className="img-fluid d-block w-100" alt="..."></img>
                </div>
                <div  data-interval={this.state.timeInterval} className="carousel-item">
                  <div className="gradient d-flex text-center flex-column justify-content-center align-items-center">
                    <h1 className="z3" style={{fontSize:"5.5rem", fontWeight:"800", color:"#fff", marginTop:"-100px"}}>SOGI</h1>
                    <h2 className="z3" style={{fontSize:"2rem", fontWeight:"800", color:"rgba(255,255,255,0.85)", marginTop:"0px"}}>Sistema para la optimización de la Gestión intrahospitalaria</h2>
                  </div>
                  <img  src={carousel2} style={{objectFit:this.state.fit, height: this.state.height, filter:this.state.blur}} className="img-fluid d-block w-100" alt="..."></img>
                </div>
                <div  data-interval={this.state.timeInterval} className="carousel-item">
                  <div className="gradient d-flex text-center flex-column justify-content-center align-items-center"> 
                    <h1 className="z3" style={{fontSize:"5.5rem", fontWeight:"800", color:"#fff", marginTop:"-100px"}}>SOGI</h1>
                    <h2 className="z3" style={{fontSize:"2rem", fontWeight:"800", color:"rgba(255,255,255,0.85)", marginTop:"0px"}}>Sistema para la optimización de la Gestión intrahospitalaria</h2>
                  </div>
                  <img  src={carousel3} style={{objectFit:this.state.fit, height: this.state.height, filter:this.state.blur}} className="img-fluid d-block w-100" alt="..."></img>
                </div>
                <div className="position-absolute w-100" style={{height: "150px", overflow: "hidden",zIndex:"1", bottom:"0"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M0.00,49.98 C178.61,144.57 294.30,28.12 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke:'none', fill: "#fff"}}></path></svg></div>
              </div>
            </div>
     
        </div>
    )
    
  }
 
}
 
export default MainPage;