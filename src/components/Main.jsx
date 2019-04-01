import React from 'react';
import styled from 'styled-components';

const MainStyled= styled.div`
  display:grid;
  grid-template-columns:minmax(auto, 1024px);
  justify-content:center;
  padding:1em;
`;

const MainContend= styled.div`
  display:grid;
  grid-template-columns:1fr 3fr;
  grid-gap: 2rem;
  grid-row-gap:0.5em;
`;

const Main=({children})=>(
  <MainStyled>
    <MainContend>
        {children}
    </MainContend>
  </MainStyled>
);

export default Main;