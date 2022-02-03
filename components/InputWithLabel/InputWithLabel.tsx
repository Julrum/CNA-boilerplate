import { InputWithLabelProps } from "./InputWithLabel.type";
import { StyledInputWithLabel } from "./InputWithLabel.style";

const InputWithLabel = ({ label }: InputWithLabelProps) => {
  return (
    <StyledInputWithLabel>
      {label}
      <input />
    </StyledInputWithLabel>
  );
};

export default InputWithLabel;
