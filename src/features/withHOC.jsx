import React from 'react';

const withHOC = Component => props => (
  <Component testHOCProp="come from HOC" {...props} />
);

export default withHOC;
