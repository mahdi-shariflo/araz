import React from "react";

interface props {
  label: string;
  textarea?: boolean;
  className?: string;
  placeholder: string;
  value: string;
  onChange: any;
  name: string;
  error?: any;
}
const InputProfile = ({
  label,
  textarea = false,
  className,
  placeholder,
  value,
  onChange,
  name,
  error,
}: props) => {
  return (
    <div className={`flex flex-col w-full relative ${className}`}>
      <label className="text-[12px] text-white pb-2">
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          className="bg-gray-50 outline-none resize-none text-[12px] font-yekan !w-full px-2 py-3 rounded-md border"
        />
      ) : (
        <>
          <input
            className="bg-gray-50 outline-none text-[12px] font-yekan w-full px-2 py-4 rounded-md border"
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
          />
        </>
      )}
      <p className="text-xs text-red-500 w-fit absolute -bottom-6">
        {error}
      </p>
    </div>
  );
};

export default InputProfile;
