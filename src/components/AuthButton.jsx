import React from 'react';
import { Button } from 'antd';
import { hasPermission } from '../utils';
import PropTypes from "prop-types";


export default function AuthButton(props) {
  let disabled = props.disabled;
  if (props.auth && !hasPermission(props.auth)) {
    disabled = true;
  }
  disabled = false;
  return disabled ? null : <Button {...props}>{props.children}</Button>
}

AuthButton.propTypes = {
  auth: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node
}
