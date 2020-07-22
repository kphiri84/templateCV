import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>A propos de moi</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
               <a href="https://www.fichier-pdf.fr/2020/07/22/cv-kenny-phiri---dev-web/" target="_blank">Télécharger mon CV</a>
                  </div>
               </div>
      </section>
    );
  }
}