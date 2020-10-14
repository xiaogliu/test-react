import React from 'react';

import withHOC from '../withHOC';
import Bar from './Bar';

class EnzymeDive extends React.Component {
  shouldComponentUpdate() {
    console.log(1111);
  }

  render() {
    return (
      <div>
        Enzyme Dive
        <Bar />
      </div>
    );
  }
}

export default withHOC(EnzymeDive);
