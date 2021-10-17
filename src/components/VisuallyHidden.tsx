import styled from 'styled-components';

// https://clubmate.fi/visually-hidden
const VisuallyHidden = styled.span`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding-bottom: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-top: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
`;

export default VisuallyHidden;
