import { TextProps } from "@mantine/core";
import React from "react";

type TypographyProps = {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "caption"
    | "label"
    | "link";
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
} & Omit<TextProps, "size" | "weight" | "color">;

const Typography = ({
  variant = "p",
  className,
  children,
  as: Component = "p",
  ...rest
}: TypographyProps) => {
  const variantStyles: Record<string, Partial<TextProps>> = {
    h1: { size: "xl", style: { fontWeight: 700 } },
    h2: { size: "lg", style: { fontWeight: 700 } },
    h3: { size: "md", style: { fontWeight: 700 } },
    h4: { size: "sm", style: { fontWeight: 600 } },
    h5: { size: "xs", style: { fontWeight: 600 } },
    h6: { size: "xs", style: { fontWeight: 500 } },
    p: { size: "md" },
    span: { size: "sm" },
    caption: { size: "xs", color: "gray" },
    label: { size: "xs", style: { fontWeight: 600, color: "gray" } },
    link: {
      size: "md",
      style: { fontWeight: 500, color: "blue", textDecoration: "underline" },
    },
  };

  const variantProps = variantStyles[variant] || variantStyles.p;

  return React.createElement(
    Component,
    { className, ...variantProps, ...rest },
    children
  );
};

export default Typography;
