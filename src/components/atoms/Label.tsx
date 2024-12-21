import React from "react";

type Props = {
  text: string;
};

const Label: React.FC<Props> = ({ text }) => {
  return <label>{text}</label>;
};

export default Label;
