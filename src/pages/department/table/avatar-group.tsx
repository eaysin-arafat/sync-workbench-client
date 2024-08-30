import ToolTipDefault from "@/component/ui/tooltip";
import { Avatar, Tooltip as TooltipGroup } from "@mantine/core";

type Props = { data: { url: string; name: string }[] };

const AvatarGroup = ({ data }: Props) => {
  const maxAvatarsToShow = 5;
  const extraAvatars = data.length > maxAvatarsToShow;
  const visibleAvatars = data.slice(0, maxAvatarsToShow);
  const hiddenAvatars = data.slice(maxAvatarsToShow);

  return (
    <TooltipGroup.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        {visibleAvatars.map((item) => (
          <ToolTipDefault label={item?.name} key={item?.name}>
            <Avatar
              src={item?.url}
              name={item?.name}
              color="initials"
              radius="xl"
            />
          </ToolTipDefault>
        ))}

        {extraAvatars && (
          <ToolTipDefault
            label={
              <>
                {hiddenAvatars.map((item) => (
                  <div key={item?.name}>{item?.name}</div>
                ))}
              </>
            }
          >
            <Avatar radius="xl">+{hiddenAvatars.length}</Avatar>
          </ToolTipDefault>
        )}
      </Avatar.Group>
    </TooltipGroup.Group>
  );
};

export default AvatarGroup;
