import { ReactNode } from "react";
import styles from "./style.module.scss";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
