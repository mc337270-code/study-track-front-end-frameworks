import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger" | "ghost";
}

export default function Button({ variant = "primary", ...rest }: Props) {
  return <button className={`btn ${variant}`} {...rest} />;
}
