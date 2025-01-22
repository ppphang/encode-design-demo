import { IEButtonProps } from "./interface";
import classNames from "classnames";
import "./index.css";
const Button = ({
  disabled = false,
  size = "medium",
  ...props
}: IEButtonProps) => {
  const {
    label,
    onClick,
    children,
    className: customClassName,
    ...rest
  } = props;
  const cls = classNames([customClassName, "btn-default", `btn-${size}`]);

  return (
    <button className={cls} onClick={onClick} disabled={disabled} {...rest}>
      {children || label}
    </button>
  );
};

export default Button;
