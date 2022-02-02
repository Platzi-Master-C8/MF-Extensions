/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const BaseLayout = ({ children }) => {
  return <React.Fragment>{children || <Outlet />}</React.Fragment>;
};

BaseLayout.propTypes = {
  children: PropTypes.node
};

export default BaseLayout;
