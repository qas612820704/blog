import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import styled from 'styled-components';
import { rhythm } from './typography';

const FadeIn = styled.div`
  @keyframes fade-in {
    0% {
      transform: translate(0, ${rhythm(2)});
      opacity: 0;
    }
    100% {
      transform: translate(0,0);
      opacity: 1;
    }
  }
  animation: fade-in 0.3s cubic-bezier(0.22,0.61,0.36,1);
`;

export const withFadeIn = (Component) => {
  const C = (props) => (
    <FadeIn>
      <Component {...props} />
    </FadeIn>
  )
  C.dispalyName = `withFadeIn(${Component.displayName || Component.name})`;
  C.WrappedComponent = Component;

  return hoistNonReactStatic(C, Component);
}

export default FadeIn;
