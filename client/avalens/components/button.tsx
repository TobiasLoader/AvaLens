import React from 'react';

export const Button = ({ children, className, onClick }) => {
  return (
    <button className={`button-base btn-${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;