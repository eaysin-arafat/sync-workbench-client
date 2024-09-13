import AvatarGroup from "@/component/ui/avatar/avatar-group";
import Table, { TableColumn } from "@/component/ui/table";
import Typography from "@/component/ui/typography";
import { UpcomingBirthday } from "@/constants/api-interface/dashboard";

const columns: TableColumn[] = [
  {
    header: "",
    accessor: "avatar",
    render: (data) => {
      const userAvatar = {
        url: data?.avatar?.url || "",
        name: data?.username,
      };

      return (
        <div className="flex items-center justify-center">
          <AvatarGroup data={[userAvatar]} />
        </div>
      );
    },
  },
  {
    header: "Username",
    accessor: "username",
  },
  {
    header: "Email",
    accessor: "email",
  },
  {
    header: "Date Of Birth",
    accessor: "date_of_birth",
  },
];

interface Props {
  data: UpcomingBirthday[];
}

const UpcomingBirthdayTable = ({ data }: Props) => {
  return (
    <div className="rounded-sm bg-bgColor pt-6 shadow-1 max-w-full overflow-x-auto">
      <Typography variant="h4" className="mb-2">
        Upcoming BirthDays
      </Typography>
      <Table columns={columns} data={data || []} isCheckbox={false} />
    </div>
  );
};

export default UpcomingBirthdayTable;
