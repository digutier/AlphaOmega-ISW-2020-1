import React from 'react';
import Solution from './solution/Solution';
 
class Solutions extends React.Component {
 
  render() {
    const title1 = "Disponibilizar la información";
    const description1 =  "Los profesionales encargados de gestionar los recursos clínicos tendrán a su disposición la información en tiempo real de todos los recursos existentes, asignar recursos, obtener recomendaciones y consultar las necesidades específicas de los pacientes.";
    const title2 = "Estadísticas y optimizaciones diarias";
    const description2 = "Se analizará constantemente el rendimiento de la gestión en busca de posibles mejoras para optimizar los tiempos de atención y así aumentar el número de pacientes atendidos por día, disminuyendo las largas listas de espera existentes. ";
    const Solution1 = {n_img: "1", title: title1, description: description1};
    const Solution2 = {n_img: "2", title: title2, description: description2};
    return (
 
        <div className="bg-light mt-5 p-3">
            <div className="container mt-5">
              <h2 id="solutions" style={{fontSize: "3rem", fontWeight:"800"}} className="mb-5 text-center">Solución</h2>
              <div className="flex-column justify-content-between">
                  <div className="col-12"><Solution info= {Solution1} /></div>
                  <div className="col-12"><Solution info= {Solution2} /></div>
              </div>
            </div>
        </div>
 
    )
    
  }
 
}
 
export default Solutions;