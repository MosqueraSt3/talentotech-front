import React from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input: React.FC<Props> = ({ value, onChange, placeholder }) => {
  return <input value={value} onChange={onChange} placeholder={placeholder} />;
};

export default Input;
