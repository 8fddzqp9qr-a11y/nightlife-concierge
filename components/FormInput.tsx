"use client";

import { ChangeEvent } from "react";

interface FormInputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "number" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  options?: { value: string; label: string }[];
}

export default function FormInput({
  label,
  name,
  type = "text",
  required = false,
  placeholder = "",
  value,
  onChange,
  options = [],
}: FormInputProps) {
  const baseClasses =
    "w-full rounded-lg border border-[rgba(212,175,55,0.15)] bg-[#1A1A1A] px-4 py-3 text-[15px] text-[#F5F5F5] placeholder-[#A0A0A0]/50 outline-none transition-all duration-200 focus:border-[#D4AF37] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.08)]";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[13px] font-medium tracking-[0.02em] text-[#A0A0A0]">
        {label}
        {required && <span className="ml-1 text-[#D4AF37]">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={5}
          className={`${baseClasses} min-h-[140px] resize-y`}
        />
      ) : type === "select" ? (
        <div className="relative">
          <select
            id={name}
            name={name}
            required={required}
            value={value}
            onChange={onChange}
            className={`${baseClasses} cursor-pointer appearance-none pr-10`}
          >
            <option value="" disabled className="bg-[#1A1A1A] text-[#A0A0A0]/50">
              {placeholder || "Select an option"}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#1A1A1A] text-[#F5F5F5]">
                {opt.label}
              </option>
            ))}
          </select>
          {/* Custom chevron */}
          <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3.5 5.25L7 8.75L10.5 5.25"
                stroke="#A0A0A0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseClasses}
        />
      )}
    </div>
  );
}
