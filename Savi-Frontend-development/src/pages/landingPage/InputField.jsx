import React from "react";

export const InputField = ({
  type,
  onChange,
  onKeyDown,
  className,
  id,
  inputRef,
  maxLength,
  value,
  required,
  name,
  accept,
  checked,
  disabled,
  placeholder,
  htmlFor,
  title,
  labelClass,
}) => {
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      <span>{title}</span>
      <input
        type={type}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={className}
        id={id}
        value={value}
        ref={inputRef}
        maxLength={maxLength}
        required={required}
        name={name}
        accept={accept}
        checked={checked}
        disabled={disabled}
        placeholder={placeholder}
      />
    </label>
  );
};

export const Select = ({
  name,
  id,
  options,
  value,
  optionValue,
  className,
  onChange,
  defaultValue,
  htmlFor,
  labelClass,
  title,
}) => {
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      <span>{title}</span>
      <select
        name={name}
        value={value}
        className={className}
        id={id}
        onChange={onChange}
      >
        <option>{defaultValue}</option>
        {options?.map((option, index) => (
          <option key={index} value={optionValue ? option.optionValue : option}>
            {optionValue ? option.optionValue : option}
          </option>
        ))}
      </select>
    </label>
  );
};

export const Button = ({
  className,
  id,
  children,
  type,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={className}
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
