import React, { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  className = "",
  required = false,
  ...props
}) => {
  return (
    <div className="flex items-center">
      <label className="w-1/3 text-gray-700 text-sm">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="w-2/3">
        <input
          className={`w-full px-3 py-2 bg-gray-50 border-b border-gray-300 hover:border-[#ffcc00] focus:border-[#ffcc00] focus:outline-none focus:ring-1 focus:ring-[#ffcc00] transition-all duration-200 ${className}`}
          {...props}
          autoComplete="off"
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default FormField;