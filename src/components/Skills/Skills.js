import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faFigma } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <section id="Skills" className="recuadro-skills py-">
      <h3>Skills</h3>
      <div className="skills-container">
        <div className="skill-item">
          <FontAwesomeIcon icon={faFigma} size="3x" className="skill-icon figma" />
          <p>Figma</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faHtml5} size="3x" className="skill-icon html" />
          <p>HTML5</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faCss3Alt} size="3x" className="skill-icon css" />
          <p>CSS3</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faJs} size="3x" className="skill-icon js" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faReact} size="3x" className="skill-icon react" />
          <p>React JS</p>
        </div>
    
        <div className="skill-item">
          <img src="/photoshop-svgrepo-com.svg" alt="Photoshop" className="skill-icon photoshop" width="40" height="40" />
          <p>Photoshop</p>
        </div>
        
        <div className="skill-item">
          <img src="/adobe-illustrator-svgrepo-com.svg" alt="Illustrator" className="skill-icon illustrator" width="40" height="40" />
          <p>Illustrator</p>
        </div>
        
        <div className="skill-item">
          <img src="/corel.png" alt="CorelDRAW" className="skill-icon corel" width="40" height="40" />
          <p>CorelDRAW</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;





