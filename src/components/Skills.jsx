import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';

const SkillsContainer=Styled.div`
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  grid-gap:2rem;
  grid-row-gap:0.5em;
`;

const SkillsH5=Styled.h5`
  margin:.5em 0;
`;
const SkillsLine=Styled.div`
  height:8px;
  position:relative;
  border-radius:50px;
  background:#F8BBD0;
`;
const SkillsSpan=Styled.span`
  display:block;
  height:100%;
  width:${props=>props.width};
  border-radius:8px;
  position:relative;
  background-color:#C2185B;
  overflow:hidden;
  box-shadow:inset 8 2px 9px rgba(255,255,255,0.3) inset 0 -2px 6px rgba(0,0,0,0.4)
`;
const Skills=props=>(
  <div className="Skills">
    <SkillsContainer>
    {props.data.map((skiil,index)=>(
      <div className="Skills-item" key={`Skiils-${index}`}>
        <SkillsH5>{skiil.name}</SkillsH5>
        <SkillsLine>
          <SkillsSpan width={skiil.percentage}/>
        </SkillsLine>
      </div>
    ))}
    </SkillsContainer>
  </div>
);

export default Skills;