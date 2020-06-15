import React from 'react';
import Problem from './problem/Problem';
 
class Problems extends React.Component {
 
  render() {
    const title1 = "Tiempos muertos";
    const description1 =  "La falta de herramientas tecnológicas para sincronizar la información genera tiempos muertos en el uso de equipamientos y equipos clínicos";
    const title2 = "Recursos mal gestionados";
    const description2 = "No se lleva un control digital del estado de los recursos clínicos, lo que dificulta la labor de gestión";
    const title3 = "Largas listas de espera";
    const description3 =  "Existen muchos pacientes esperando a ser operadores o tratados, las variables a considerar son demasiadas para un análisis humano, por lo que, se requiere de uso de herramientas de optimización";
    const problem1 = {n_img: "1", title: title1, description: description1};
    const problem2 = {n_img: "2", title: title2, description: description2};
    const problem3 = {n_img: "3", title: title3, description: description3};
    return (
 
        <div className="container">
          <h2 id="problems" style={{fontSize: "3rem", fontWeight:"800"}} className="mb-5 text-center">Problemática</h2>
          <div className="row justify-content-between">
              <div className="col-11 col-sm-10 col-lg-4"><Problem info= {problem1} /></div>
              <div className="col-11 col-sm-10 col-lg-4"><Problem info= {problem2} /></div>
              <div className="col-11 col-sm-10 col-lg-4"><Problem info= {problem3} /></div>
          </div>
        </div>
 
    )
    
  }
 
}
 
export default Problems;