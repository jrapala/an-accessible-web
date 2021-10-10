import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 1.0875rem;
  padding-top: 0;
`;

interface LayoutStyleProps {
  alignContent?: string;
  flex?: string;
  justifyContent?: string;
  margin?: string;
  mobile?: boolean;
  width?: string;
  wrap?: string;
}

export const Row = styled.div<LayoutStyleProps>`
  display: flex;
  flex: ${props => (props.flex ? props.flex : 'initial')};
  flex-direction: row;
  flex-wrap: ${props => (props.wrap ? props.wrap : 'initial')};
  align-content: ${props => (props.alignContent ? props.alignContent : 'initial')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'initial')};
  @media screen and (max-width: 768px) {
    flex-direction: ${props => (props.mobile ? 'column' : 'row')};
  }
`;

export const Column = styled.div<LayoutStyleProps>`
  flex: ${props => (props.flex ? props.flex : 'initial')};
  flex-direction: column;
  align-content: ${props => (props.alignContent ? props.alignContent : 'initial')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'initial')};
  margin: ${props => (props.margin ? props.margin : '0')};
  width: ${props => (props.width ? props.width : 'auto')};
`;
