import React from 'react';
import PropTypes from 'prop-types';

function ButtonAcess ({ className, href, children }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

ButtonAcess.defaultProps = {
  href: '/Login/Home',
  className: '',
};

ButtonAcess.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonAcess;