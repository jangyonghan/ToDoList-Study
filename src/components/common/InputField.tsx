interface InputFieldProps {
  id: string;
  type: string;
  name: string;
  title: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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
    <div>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        type={type}
        name={name}
        title={title}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
