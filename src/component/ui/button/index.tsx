import {
  Loader,
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from "@mantine/core";
import React from "react";

interface ButtonProps extends MantineButtonProps {
  variant?: "filled" | "outline" | "light" | "subtle" | "link" | "gradient";
  color?: string;
  gradientFrom?: string;
  gradientTo?: string;
  gradientDeg?: number;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
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
  type = "button",
  leftSection,
  rightSection,
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
      type={type}
      loading={loading}
      onClick={onClick}
      leftSection={leftSection}
      rightSection={rightSection}
      {...props}
    >
      {loading && <Loader size={20} />}
      {children}
    </MantineButton>
  );
};

export default Button;
