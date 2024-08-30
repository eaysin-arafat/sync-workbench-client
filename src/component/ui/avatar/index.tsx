import { Avatar as MantineAvatar } from "@mantine/core";
import ToolTipDefault from "../tooltip";

export type AvatarDataType = {
  name: string;
  url: string;
};

const Avatar = ({ data }: { data: AvatarDataType }) => {
  return (
    <ToolTipDefault label={data?.name}>
      <MantineAvatar
        src={data?.url}
        key={data?.name}
        name={data?.name}
        color="#2280de"
        radius="xl"
      />
    </ToolTipDefault>
  );
};

export default Avatar;
