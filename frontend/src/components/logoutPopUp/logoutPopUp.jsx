import React from "react";

import styles from "./logoutPopUp.module.css";

function LogoutPopUp({ onConfirm, onCancel }) {
  return (
    <div className={styles.divStyle}>
      <h1>Are you sure you want to logout?</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.logoutButton} onClick={onConfirm}>
          Logout
        </button>
        <button className={styles.cancelButton} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default LogoutPopUp;
