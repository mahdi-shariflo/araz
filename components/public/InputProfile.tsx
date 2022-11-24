import React from "react";

interface props {
  label: string;
  textarea?: boolean;
  className?: string;
  placeholder: string;
  value: string;
  onChange:any;
  name: string;
}
const InputProfile = ({
  label,
  textarea = false,
  className,
  placeholder,
  value,
  onChange,
  name,
}: props) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label className="text-[12px] text-white pb-2">
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={7}
          className="bg-gray-50 outline-none resize-none text-[12px] font-yekan !w-full px-2 py-3 rounded-md"
        />
      ) : (
        <input
          className="bg-gray-50 outline-none text-[12px] font-yekan w-full px-2 py-4 rounded-md"
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      )}
    </div>
  );
};

export default InputProfile;
