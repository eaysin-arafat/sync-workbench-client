import React from "react";
import { FiLoader } from "react-icons/fi";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light" | "subtle" | "link" | "gradient";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  gradientFrom?: string;
  gradientTo?: string;
  gradientDeg?: number;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  color = "primary",
  gradientFrom = "blue-400",
  gradientTo = "blue-600",
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
}) => {
  const baseClasses =
    "flex items-center justify-center font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeClasses = {
    xs: "px-2.5 py-1.5 text-xs",
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-4 py-2 text-lg",
    xl: "px-6 py-3 text-xl",
  };

  const variantClasses = {
    primary: `bg-${color} text-white hover:bg-${color}-600`,
    outline: `bg-transparent border-2 border-${color}-500 text-${color}-500 hover:bg-${color}-500 hover:text-white`,
    light: `bg-${color}-100 text-${color}-600 hover:bg-${color}-200`,
    subtle: `bg-transparent text-${color}-600 hover:bg-${color}-100`,
    link: `text-${color}-600 hover:underline`,
    gradient: `bg-gradient-to-r from-${gradientFrom} to-${gradientTo} text-white`,
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  const loadingSpinner = <FiLoader className="animate-spin mr-2" size={20} />;

  return (
    <button
      className={` ${baseClasses} ${sizeClasses[size]} ${
        variantClasses[variant]
      } ${fullWidth ? "w-full" : ""} ${
        disabled || loading ? disabledClasses : ""
      }`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && loadingSpinner}
      {children}
    </button>
  );
};

export default Button;
