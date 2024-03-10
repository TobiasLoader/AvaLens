import React from 'react';
import styles from "../app/page.module.css";

export const Button = ({ children, className, onClick }) => {
  return (
    <button className={`${styles.buttonBase} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;