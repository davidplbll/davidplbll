import React from 'react';
import Social from './Social'
import Styled from 'styled-components'

const AboutStyle=Styled.div`
  text-align:center;
`;

const AboutAvart=Styled.div`
  padding:2em 0 0 0;
`;

const AboutIimg=Styled.img`
  border-radius:100%;
  width:160px;
  height:160px;
  border:2px solid #E91E63;
  margin 0 auto;
  display:block;
  box-shadow:0 0 10px rgba(0,0,0,0.6);
`;

const AboutName=Styled.div`
  text-align:center;
`;
 const AboutH2=Styled.h2`
    font-family:'Roboto' sans-serif;
    fon-weight:400;
    letter-spacing:1.2px;
    margin:.5em 0 0 0;
    color:#C2185B;
 `;

 const AboutProfession=Styled.p`
  margin:.2em 0 1em 0;
  letter-spacing:1.6px;
  fon-weight:300;
  color:#C2185B;
 `;

 const AboutBio=Styled.p`
  color:#757575;
  font-size:1em;
  font-weight:300;
 `;

 const AboutLocation=Styled.p`
  color:#757575;
  font-size:1em;
  font-weight:400;
 `;

const About = ({avatar,name,profession,bio,address,social}) => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvart>
        <figure>
          <AboutIimg src={avatar} alt={name} />
        </figure>
      </AboutAvart>
      <AboutName>
        <AboutH2>{name}</AboutH2>
      </AboutName>
      <div className="About-profession">
        <AboutProfession>{profession}</AboutProfession>
      </div>
      <div className="About-desc">
        <AboutBio>{bio}</AboutBio>
      </div>
      <div className="About-location">
        <AboutLocation>{address}</AboutLocation>
      </div>
      <div className="About-social">
        <Social social={social}/>
      </div>
    </div>
  </AboutStyle>
);

export default About;
