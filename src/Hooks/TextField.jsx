import React from "react";

function TextField({ label, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        className="textField__input"
        type="text"
        name={name}
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
