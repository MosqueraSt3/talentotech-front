import React from "react";

type Props = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<Props> = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`transition ${className}`}>
      {text}
    </button>
  );
};

export default Button;
