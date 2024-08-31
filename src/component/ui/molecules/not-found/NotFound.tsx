import { styles } from "@/utils/cn";
import Typography from "../../atoms/typography";

// Not Found Component props
type Props = {
  messages?: string;
  className?: string;
};

// Not Found Component
function NotFound({ messages, className = "" }: Props) {
  return (
    <div
      className={styles(
        "flex justify-center text-lg 2xl:text-xl items-center w-full p-3 h-32 bg-whiteColor rounded-lg text-textColor",
        className
      )}
    >
      <Typography variant="h4">
        {messages ? messages : "No Recorded Data Yet to Show"}
      </Typography>
    </div>
  );
}

export default NotFound;
