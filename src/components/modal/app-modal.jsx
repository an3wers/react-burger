/* eslint-disable react-hooks/exhaustive-deps */
import { createPortal } from "react-dom";
import styles from "./app-modal.module.css";
import ModalOverlay from "./modal-overlay/modal-overlay";
import { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modals");

const AppModal = ({ title, children, onClose }) => {
  useEffect(() => {
    const closeHandler = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", closeHandler);
    return () => {
      document.removeEventListener("keydown", closeHandler);
    };
  }, []);

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            {title && <h2 className="text text_type_main-large">{title}</h2>}
            <span
              onClick={onClose}
              role="button"
              className={styles["close-btn"]}
            >
              <CloseIcon type="primary" />
            </span>
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
      <ModalOverlay onClose={onClose} />
    </div>,
    modalRoot
  );
};

AppModal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  onClose: PropTypes.func.isRequired,
};

export default AppModal;
