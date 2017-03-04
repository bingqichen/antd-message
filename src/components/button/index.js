import React, { PropTypes } from 'react';
import cx from 'classnames';

import './style.less';

const Button = (props) => {
  const { className, disabled, type, size, children, onClick } = props;
  const cls = cx(
    'component-button-wrap',
    type,
    size,
    className
  );
  return (
    <button
      className={cls}
      disabled={disabled}
      onClick={onClick}
    >{children}</button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func
};
Button.defaultProps = {
  className: undefined,
  disabled: false,
  type: 'primary',
  size: 'middle',
  children: undefined,
  onClick: () => {}
};

export default Button;
