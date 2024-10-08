import { Tooltip as MantineTooltip } from "@mantine/core";
import React from "react";

interface TooltipProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

const Tooltip = ({ label, children }: TooltipProps) => {
  if (!label) return <>{children}</>;
  return (
    <MantineTooltip
      label={label}
      position="top"
      styles={{
        tooltip: {
          backgroundColor: "var(--bgColor)",
          color: "var(--textColor)",
          border: "1px solid var(--stroke)",
          textTransform: "capitalize",
        },
        arrow: { border: "1px solid var(--stroke)" },
      }}
      withArrow
    >
      {children}
    </MantineTooltip>
  );
};

export default Tooltip;
