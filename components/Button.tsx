import { MouseEventHandler } from "react";

type ButtonProps = {
  children: any;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`rounded-md p-2 text-sm duration-300 ease-in hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-700 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
