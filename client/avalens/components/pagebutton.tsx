import React from 'react';
import styles from "../app/page.module.css";

export const PageButton = ({ pageName, className, currentPage, onClick }) => {
  return (
    currentPage == pageName ? (
      <p className={`${styles.pageButton} ${styles.pageButtonCurrent} ${className}`} onClick={onClick}>
        {pageName}
      </p>
    ) : (
      <p className={`${styles.pageButton} ${className}`} onClick={onClick}>
        {pageName}
      </p>
    )
  );
};

export default PageButton;