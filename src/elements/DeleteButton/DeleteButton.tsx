import * as React from "react";
import IconButton from "elements/IconButton";
import iDeleteLight from "./delete-forever-light.svg";
import iDeleteDark from "./delete-forever-dark.svg";

interface IProps {
  theme: "light" | "dark";
  onClick: () => void
}

const DeleteButton: React.FunctionComponent<IProps> = ({ onClick, theme }) => {
  return (
    <IconButton
      alt="delete"
      onClick={onClick}
    >
      {theme === "light" ? iDeleteDark : iDeleteLight}
    </IconButton>
  );
};

export default DeleteButton;
