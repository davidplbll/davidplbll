import React from 'react';

const Skills=props=>(
  <div className="Skills">
    <div className="Skills-container">
    {props.data.map((skiil,index)=>(
      <div className="Skills-item" key={`Skiils-${index}`}>
        <h5>{skiil.name}</h5>
        <div className="Skills-line">
          <span>{skiil.percentage}</span>
        </div>
      </div>
    ))}
    </div>
  </div>
);

export default Skills;