import { StyledForm } from "./style";

export const Form = ({ children, submit, handle }) => {
  return <StyledForm onSubmit={handle(submit)}>{children}</StyledForm>;
};
