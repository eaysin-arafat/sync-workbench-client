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
  const variantStyles: Record<
    string,
    Partial<TextProps & { style?: React.CSSProperties }>
  > = {
    h1: { style: { fontWeight: 700, fontSize: "2rem" } },
    h2: { style: { fontWeight: 700, fontSize: "1.75rem" } },
    h3: { style: { fontWeight: 600, fontSize: "1.5rem" } },
    h4: { style: { fontWeight: 500, fontSize: "1.25rem" } },
    h5: { style: { fontWeight: 500, fontSize: "1rem" } },
    h6: { style: { fontWeight: 500, fontSize: "0.875rem" } },
    p: { style: { fontSize: "1rem" } },
    span: { style: { fontSize: "0.875rem" } },
    caption: { style: { fontSize: "0.75rem", color: "gray" } },
    label: { style: { fontWeight: 600, fontSize: "0.75rem", color: "gray" } },
    link: {
      style: {
        fontWeight: 500,
        fontSize: "1rem",
        color: "blue",
        textDecoration: "underline",
      },
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
