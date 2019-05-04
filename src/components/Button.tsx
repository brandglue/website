import React, { FC } from 'react';

interface IOwnProps extends React.HTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<IOwnProps> = props => (
  <button
    className={props.className}
    disabled={props.isDisabled}
    onClick={props.onClick}
    type={props.type}
  >
    {props.children}
  </button>
);

Button.defaultProps = {
  className: '',
  isDisabled: false,
  onClick: () => undefined,
  type: 'button',
};

export default Button;
