import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <div className="mt-8 flex flex-col text-darker-grey">
      <label className="mb-2 ml-1 font-medium">{label}</label>
      <input
        className="w-94 h-14 border-1 border-normal-grey rounded-xl placeholder:opacity-75 pl-2"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
