import React from "react";

function TextBox(props) {
  const {
    onChange,
    value,
    name,
    id,
    labelText,
    min,
    max,
    type,
    required = false,
    placeholder,
    defaultValue,
  } = props;
  return (
    <div className="flex flex-row mb-6 items-center gap-1">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-10/12"
      >
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        min={min}
        max={max}
        required={required}
        onWheel={(e) => e.target.blur()}
        defaultValue={defaultValue}
      />
    </div>
  );
}
export default TextBox;
