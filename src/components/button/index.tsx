import { type FC } from "react";

interface Props {
  name?: string;
  text: string;
  designs?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fn?: () => void;
}

const Button: FC<Props> = ({ name, text, designs, disabled, type, fn }) => {
  return (
    <button
      name={name}
      onClick={fn}
      disabled={disabled}
      type={type}
      className={`custom-btn ${designs}`}
    >
      {text}
    </button>
  );
};

export default Button;
