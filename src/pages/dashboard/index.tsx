import { useReadDashboardQuery } from "@/features/dashboard/dashboard-api";
import { FaProjectDiagram } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { IoMdCodeWorking } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineTimeToLeave } from "react-icons/md";
import CardDataStats from "./components/charts/CardDataStats";
import UpcomingBirthdayTable from "./components/table/UpcomingBirthday";

const Dashboard = () => {
  const { data: dashboard } = useReadDashboardQuery({});

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats
          title="Total Employees"
          total={dashboard?.data?.totalEmployees || 0}
          icon={<IoMdCodeWorking className="text-primary" size={20} />}
        />
        <CardDataStats
          title="Pending Employees"
          total={dashboard?.data?.pendingEmployees || 0}
          icon={<IoMdCodeWorking className="text-primary" size={20} />}
        />

        <CardDataStats
          title="HR Requests"
          total={0}
          icon={<IoPeopleOutline className="text-primary" size={20} />}
        />

        <CardDataStats
          title="Pending Leaves"
          total={dashboard?.data?.pendingLeaves || 0}
          icon={<MdOutlineTimeToLeave className="text-primary" size={20} />}
        />

        <CardDataStats
          title="Total Projects"
          total={dashboard?.data?.totalProjects || 0}
          icon={<FaProjectDiagram className="text-primary" size={20} />}
        />

        <CardDataStats
          title="Total Tasks"
          total={dashboard?.data?.totalTasks || 0}
          icon={<GoTasklist className="text-primary" size={20} />}
        />

        <CardDataStats
          title="Ongoing Tasks"
          total={dashboard?.data?.ongoingTasks || 0}
          icon={<GoTasklist className="text-primary" size={20} />}
        />

        <CardDataStats
          title="Total Users"
          total={dashboard?.data?.ongoingTasks || 0}
          icon={<IoPeopleOutline className="text-primary" size={20} />}
        />
      </div>

      <div>
        <UpcomingBirthdayTable
          data={dashboard?.data?.upcomingBirthdays || []}
        />
      </div>
    </>
  );
};

export default Dashboard;
