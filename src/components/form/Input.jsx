import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

function FormInput({
  placeholder,
  name,
  value,
  onChange,
  error,
  register,
  type,
  isTextArea = false,
  rows,
}) {
  const [isPassword] = useState(type === 'password');
  const [show, setShow] = useState(!isPassword);

  const togglePasswordMasking = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <div className="ring-1 ring-stone-300 flex flex-row justify-between items-center">
        {!isTextArea ? (
          <input
            className="p-3 bg-transparent w-full autofill:bg-transparent"
            type={show ? 'text' : type || 'text'}
            placeholder={placeholder}
            {...register(name)}
            value={value}
            onChange={onChange}
          />
        ) : (
          <textarea
            className="p-3 bg-transparent w-full autofill:bg-transparent"
            type={show ? 'text' : type || 'text'}
            placeholder={placeholder}
            {...register(name)}
            value={value}
            onChange={onChange}
            rows={rows}
          />
        )}

        {isPassword && (
          <IconButton className="icon" onClick={togglePasswordMasking}>
            {show ? (
              <Visibility fontSize="large" />
            ) : (
              <VisibilityOff fontSize="large" />
            )}
          </IconButton>
        )}
      </div>
      {error && <p className="text-red-500">{error.message}</p>}
    </>
  );
}

export default FormInput;
