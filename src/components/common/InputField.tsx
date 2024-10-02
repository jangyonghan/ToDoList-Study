import styled from "styled-components";

interface InputFieldProps {
  id: string;
  type: string;
  name: string;
  title: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputStyel = styled.input`
  width: 520px;
  height: 50px;
  border-radius: 8px;
  padding: 0px;
  border: 1px solid;
  border-color: #d9d9d9;
  margin-top: 8px;
  &:focus {
    border-color: #5534da;
    outline: none;
  }
`;

const LabelStyel = styled.label`
  font-size: 16px;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  name,
  title,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <MainContainer>
      <LabelStyel htmlFor={id}>{title}</LabelStyel>
      <InputStyel
        id={id}
        type={type}
        name={name}
        title={title}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </MainContainer>
  );
};

export default InputField;
