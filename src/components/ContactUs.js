import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Pour toute demande ou suggestions n'hésitez pas à me contacter !
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in : 
                  <a href="https://www.linkedin.com/in/kenny-phiri/" target="_blank"> Kenny PHIRI</a>
                </h4>
                <h4>Mail :
                  kenny.phiri84@gmail.com
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}