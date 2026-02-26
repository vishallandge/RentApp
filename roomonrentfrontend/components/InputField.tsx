import { useState } from "react";

interface Props {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  name,
  type,
  value,
  onChange,
}: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label
        className={`absolute left-4 top-3 text-gray-400 text-sm transition-all duration-200
        ${focused || value ? "opacity-0" : "opacity-100"}`}
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full border border-gray-300 text-black rounded-sm px-2 py-2 focus:border-rose-600 focus:outline-none"
      />
    </div>
  );
}
