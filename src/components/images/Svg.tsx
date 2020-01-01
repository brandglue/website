import styled from 'styled-components';

const Svg = styled.svg.attrs({
  'aria-hidden': 'true',
  /*
    IE & Edge respect the focusable attribute that was introduced in SVG Tiny 1.2
    and later deprecated with SVG 2. Must add focusable="false" to prevent IE and Edge from
    focusing all SVGs
  */
  focusable: 'false',
})`
  width: 100%;
  height: auto;
  color: inherit;
  fill: currentColor;
  pointer-events: none; /* Required for MS Edge to prevent clicks on SVG elements */
`;

export default Svg;
