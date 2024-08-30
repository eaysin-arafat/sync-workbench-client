import { Tooltip } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  label?: string | ReactNode;
}

const ToolTipDefault = ({ children, label }: Props) => {
  return (
    <>
      {label ? (
        <Tooltip
          label={label}
          classNames={{
            tooltip:
              "!bg-white !text-black !text-xs !border !border-gray-200 !shadow-lg",
          }}
          styles={{ arrow: { borderColor: "black" } }}
        >
          {children}
        </Tooltip>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default ToolTipDefault;
