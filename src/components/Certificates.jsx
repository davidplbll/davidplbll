import React from 'react';

import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certification = props => (
  <div className="Certification">
    <H2Styled name={"Certificates"}/>
    <div className="Certification-container">
      {props.data.map((certificate, index) => (
        <div className="Certification-item" key={`certificate-${index}`}>
          <H3Styled>{certificate.name} @ {certificate.institution}
            <span> {certificate.date}</span>
          </H3Styled>
          <PStyled name={certificate.description} />
        </div>
      ))}
    </div>
  </div>
);

export default Certification;