import React, { PropTypes } from 'react';
import cx from 'classnames';

import './style.less';

const ButtonGroup = (props) => {
  const { className, children } = props;
  const cls = cx(
    'component-button-group-wrap',
    className
  );
  return (
    <div className={cls}>{children}</div>
  );
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired
};
ButtonGroup.defaultProps = {
  className: undefined
};

export default ButtonGroup;
