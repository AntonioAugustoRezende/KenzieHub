import { StyledInputs, StyledLabel, StyledSpanError } from "./style";

export const Inputs = ({ error, placeholder, type, register, text }) => {
  return (
    <>
      <StyledLabel>{text}</StyledLabel>
      <StyledInputs
        error={error}
        placeholder={placeholder}
        type={type}
        {...register}
      />
      {error && <StyledSpanError>{error.message}</StyledSpanError>}
    </>
  );
};
