import { ReactNode } from "react";
import styles from "./style.module.scss";

type Props = {
  children: ReactNode;
  onClick: () => void;
  size?: "small" | "large";
};

const Button = ({ children, onClick, size }: Props) => {
  return (
    <button className={styles[`button--${size || "large"}`]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
