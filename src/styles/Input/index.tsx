import { InputStyled } from "./style";

interface iInputProps {
  id?: string | undefined;
  label?: string;
  className?: string;
  type: string;
  placeholder?: string;
  register?: object;
  disabled?: boolean | undefined;
  title?: string;
  status?: string;
  enableButton?: () => void;
}

export const Input = ({
  id,
  label,
  className,
  type,
  placeholder,
  register,
  disabled,
  title,
  status,
}: iInputProps) => {
  return (
    <InputStyled>
      <div className="label-content">
        <input
          className={className}
          id={id}
          type={type}
          placeholder={placeholder}
          {...register}
          disabled={disabled}
          defaultValue={title ? title : status}
        />
        <label className="label" htmlFor={id}>
          {label}
        </label>
      </div>
    </InputStyled>
  );
};
