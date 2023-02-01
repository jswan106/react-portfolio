import React from 'react';

function Resume(props) {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1 onClick={() => something()}><span>Certifications</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {props.data?.certifications?.map((cert) => (
                <div key={cert.name}>
                  <h3>{cert.name}</h3>
                  <p className="info">{cert.company} <span>&bull;</span><em
                    className="date">{cert.issued}</em>
                  </p>
                  <p>
                    <a target="_blank" href={cert.link}>{cert.description} </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
          {props.data?.work?.map((item) => (
            <div key={item.title}>
              <h3>{item.company}</h3>
              <p className="info">{item.title}
                <span>&bull;</span>
                <em className="date">{item.years}</em>
              </p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="row skillbars">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>{props.data?.skillmessage}
          </p>
          <div className="bars">
            <ul className="skills">
              {props.data?.skills?.map((skill) => {
                const className = 'bar-expand ' + skill.name.toLowerCase();
                return (
                  <li key={skill.name}>
                    <span style={{width: skill.level}} className={className}>
                      <em>{skill.name}</em>
                    </span>
                  </li>)
              })}
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
              <p className="lead center">{props.data?.favtechcomment}</p>
            </div>
          </div>
          <ul className="bgrid-thirds s-bgrid-halves cf">
            {props.data?.favoritetechnology?.map((tech) => (
              <div key={tech.name} className="columns feature-item">
                <img className="skill" alt={tech.name} src={tech.imagename}/>
                <h5>{tech.name}</h5>
                <p>{tech.description}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
