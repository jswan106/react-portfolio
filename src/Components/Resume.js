import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var favtechcomment = this.props.data.favtechcomment;
      var certifications = this.props.data.certifications.map(function (certifications) {
        return <div key={certifications.name}><h3>{certifications.name}</h3>
          <p className="info">{certifications.company} <span>&bull;</span><em className="date">{certifications.issued}</em></p>
          <p><a target="_blank" href={certifications.link}>{certifications.description} </a></p>
        </div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
      var favoritetechnology = this.props.data.favoritetechnology.map(function (favoritetechnology) {
        return <div key={favoritetechnology.name} class="columns feature-item">
          <img class="skill" alt={favoritetechnology.name} src={favoritetechnology.imagename}></img>
          <h5>{favoritetechnology.name}</h5>
          <p>{favoritetechnology.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Certifications</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {certifications}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>



        <div className="row skillbars">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>


        <div className="row favtech">
          <div className="three columns header-col">
            <h1><span>Favorite Tech</span></h1>
          </div>
          <div>
            <div className="nine columns main-col">
              <div className="row item">
                <p className="lead center">{favtechcomment}</p>
              </div>
            </div>
            <ul class="bgrid-thirds s-bgrid-halves cf">
              {favoritetechnology}
            </ul>
          </div>
        </div>

      </section>
    );
  }
}

export default Resume;
