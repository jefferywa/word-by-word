import { FC, PropsWithChildren } from "preact/compat";

import "./Button.css";

export const Button: FC<PropsWithChildren<any>> = ({
  children,
  className = "",
  ...props
}) => (
  <button {...props} className={["button", className].join(" ")}>
    {children}
  </button>
);
