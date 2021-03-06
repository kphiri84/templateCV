import React, { Component } from 'react';
import "./header.css"
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Montrer la navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Cacher la navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Accueil</a></li>
               <li><a className="smoothscroll" href="#about">A propos de moi</a></li>
               <li><a className="smoothscroll" href="#resume">Mon parcours</a></li>
               <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{resumeData.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>Je suis {resumeData.role}<br/>{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}