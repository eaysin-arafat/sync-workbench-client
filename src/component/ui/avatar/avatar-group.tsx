import Tooltip from "@/component/ui/tooltip";
import { shortId } from "@/utils/generate-shortid";
import { Avatar, Tooltip as TooltipGroup } from "@mantine/core";

export interface AvatarDataType {
  url: string;
  name: string;
}

interface Props {
  data: AvatarDataType[];
  maxAvatarsToShow?: number;
}

const AvatarGroup = ({ data, maxAvatarsToShow = 3 }: Props) => {
  const extraAvatars = data.length > maxAvatarsToShow;
  const visibleAvatars = data.slice(0, maxAvatarsToShow);
  const hiddenAvatars = data.slice(maxAvatarsToShow);

  return (
    <TooltipGroup.Group openDelay={100} closeDelay={100}>
      <Avatar.Group spacing="sm">
        {visibleAvatars.map((item) => (
          <Tooltip label={item?.name} key={shortId()}>
            <Avatar
              src={item?.url}
              name={item?.name}
              color="initials"
              size={"sm"}
              radius="xl"
              styles={{
                root: { height: 32, width: 32 },
              }}
            />
          </Tooltip>
        ))}

        {extraAvatars && (
          <Tooltip
            label={
              <>
                {hiddenAvatars.map((item) => (
                  <div key={item?.name}>{item?.name}</div>
                ))}
              </>
            }
          >
            <Avatar
              radius="xl"
              size={"sm"}
              styles={{ root: { height: 32, width: 32 } }}
            >
              +{hiddenAvatars.length}
            </Avatar>
          </Tooltip>
        )}
      </Avatar.Group>
    </TooltipGroup.Group>
  );
};

export default AvatarGroup;
