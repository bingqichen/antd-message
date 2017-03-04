import React, { PropTypes } from 'react';
import cx from 'classnames';

import './style.less';

const Icon = (props) => {
  const { type, className, onClick } = props;
  const cls = cx(
    'component-icon-wrap',
    `icon-${type}`,
    className
  );
  return (
    <i className={cls} onClick={onClick} />
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};
Icon.defaultProps = {
  className: undefined,
  onClick: () => {}
};

export default Icon;
