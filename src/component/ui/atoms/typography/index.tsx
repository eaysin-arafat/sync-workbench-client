import clsx from "clsx";
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
};

const Typography = ({
  variant = "p",
  className,
  children,
  as: Component = "p",
}: TypographyProps) => {
  const baseStyles = {
    h1: "text-title-xxl font-bold text-textColor",
    h2: "text-title-xl font-bold text-textColor",
    h3: "text-title-lg font-bold text-textColor",
    h4: "text-title-md font-semibold text-textColor",
    h5: "text-title-sm font-semibold text-textColor",
    h6: "text-title-xsm font-medium text-textColor",
    p: "text-base font-normal",
    span: "text-sm font-normal",
    caption: "text-xs text-gray-500",
    label: "text-xs font-semibold text-gray-700",
    link: "text-base text-primary hover:underline",
  };

  const combinedClassName = clsx(baseStyles[variant], className);

  return <Component className={combinedClassName}>{children}</Component>;
};

export default Typography;
