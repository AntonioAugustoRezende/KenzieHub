import { Children } from "react";
import { StyledButtons } from "./style";

export const Buttons = ({ Children }) => {
  return (
    <>
      <StyledButtons>{Children}</StyledButtons>
    </>
  );
};
