import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';

const SocialStyle = Styled.div`
  margin: 0 auto;
  display:block;

`;

const SocialUl = Styled.ul`
  list-style-type:none;
  margin:0;
  padding:0;
`;

const SocialLi = Styled.li`
  display:inline;
  margin: 0 1em 0 0;
`;

const SocialAnchor = Styled.a`
  color:#212121;
  text-decoration:none;
  font-size:1.2em;
`;
const SocialIcon = Styled.i`
  color:${props => props.theme.color}
`;

const Colors={
  facebook:{
    color: "#3b5998"
  },
  twitter : {
    color: "#38A1f3"
  },
  linkedin : {
    color: "#0e76a8"
  },
  github : {
    color: "#333"
  }
}

const getColor=(name)=>Colors[name];

const Social = props => (
  <SocialStyle>
    {
      props.social &&
      <SocialUl>
        {
          props.social.map((item, index) => (
            <SocialLi key={`social-${index}`} target="_blank">
              <SocialAnchor href={item.url}>
                <ThemeProvider theme={getColor(item.name)}>
                  <SocialIcon className={`fab fa-${item.name}`} />
                </ThemeProvider>
              </SocialAnchor>
            </SocialLi>
          ))
        }
      </SocialUl>
    }
  </SocialStyle>
);

export default Social;