import styles from "./modal-overlay.module.css";

interface IProps {
  onClose: () => void;
}

const ModalOverlay = ({ onClose }: IProps) => {
  return <div onClick={onClose} className={styles.overlay}></div>;
};

export default ModalOverlay;
