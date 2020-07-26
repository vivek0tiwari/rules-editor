import React from "react";
const TextInput = (props) => {
  const { type, label, contClass, ...fieldProps } = props;
  return (
    <div className={contClass}>
      {label}
      {type === "textarea" ? (
        <textarea {...fieldProps} />
      ) : (
        <input {...fieldProps} />
      )}
    </div>
  );
};
export default TextInput;
