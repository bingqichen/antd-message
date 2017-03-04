import React, { PropTypes } from 'react';

import './style.less';

const App = (props) => {
  const { children } = props;
  return (
    <div className="app-wrap">{children}</div>
  );
};

App.propTypes = {
  children: PropTypes.element
};
App.defaultProps = {
  children: undefined
};

export default App;
