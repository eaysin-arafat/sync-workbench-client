import {
  Loader,
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from "@mantine/core";
import React from "react";

interface ButtonProps extends MantineButtonProps {
  variant?: "filled" | "outline" | "light" | "subtle" | "link" | "gradient";
  color?: string; // Custom color support
  gradientFrom?: string;
  gradientTo?: string;
  gradientDeg?: number;
  loading?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "filled",
  color = "blue",
  gradientFrom = "blue",
  gradientTo = "blue",
  gradientDeg = 45,
  loading = false,
  onClick,
  ...props
}) => {
  // Define styles for gradient variant
  const gradientStyle =
    variant === "gradient"
      ? {
          background: `linear-gradient(${gradientDeg}deg, ${gradientFrom}, ${gradientTo})`,
          color: "white",
        }
      : {};

  return (
    <MantineButton
      variant={variant}
      color={color}
      style={gradientStyle}
      loading={loading}
      onClick={onClick}
      {...props}
    >
      {loading && <Loader size={20} />}
      {children}
    </MantineButton>
  );
};

export default Button;
