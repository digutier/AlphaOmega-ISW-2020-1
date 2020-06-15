import React from 'react';
import Member from './member/Member';

class Team extends React.Component {
 
  render() {
    const title1 = "Kevin Reyes";
    const career1 = "Ingeniería Civil Informática UTFSM";
    const description1 =  "Estudiante apasionado por la ciencia de datos y la forma forma en que puede aportar a la sociedad generando una mejor toma de decisiones en organizaciones con diversos objetivos";
    const title2 = "Diego Gutierrez";
    const career2 = "Ingeniería Civil Informática UTFSM";
    const description2 = "Estudiante amante de los perros.";
    const title3 = "Diego Norambuena";
    const career3 = "Ingeniería Civil Informática UTFSM";
    const description3 = "Estudiante amante de los gatos.";
    const member1 = {n_img: "1", title: title1, career: career1, description: description1};
    const member2 = {n_img: "2", title: title2, career: career2, description: description2};
    const member3 = {n_img: "3", title: title3, career: career3, description: description3};

    return (
 
        <div className="mt-2 mb-5 p-3">
            <div className="container mt-5">
              <h2 id="team" style={{fontSize: "3rem", fontWeight:"800"}} className="mb-5 text-center">Equipo</h2>
              <div className="flex-column justify-content-between">
                  <div className="col-12"><Member info= {member1} /></div>
                  <div className="col-12"><Member info= {member2} /></div>
                  <div className="col-12"><Member info= {member3} /></div>
              </div>
            </div>
        </div>
 
    )
    
  }
 
}
 
export default Team;