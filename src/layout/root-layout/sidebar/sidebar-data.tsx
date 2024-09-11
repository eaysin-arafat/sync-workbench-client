import {
  getBiometricAttendanceLink,
  getCalendarLink,
  getDashboardLink,
  getDepartmentLink,
  getDesignationLink,
  getDocumentLink,
  getEmployeeAttendanceLink,
  getEmployeeLink,
  getFeedbackSuggestionsLink,
  getHelpSupportLink,
  getLeaveLink,
  getPayrollLink,
  getPerformanceReviewsLink,
  getRolePermissionLink,
  getSecurityLink,
  getSettingsLink,
  getTeamManagementLink,
  getUserProfileLink,
} from "@/routes/router-link";
import { shortId } from "@/utils/generate-shortid";
import { BiLogoUnity } from "react-icons/bi";
import { CgPerformance } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import { FaProjectDiagram } from "react-icons/fa";
import { FaFingerprint } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";
import { GrDocumentPerformance } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoMdCodeWorking } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaProjectDiagramSolid, LiaTicketAltSolid } from "react-icons/lia";
import {
  MdOutlineDashboard,
  MdOutlinePermDataSetting,
  MdOutlineTimeToLeave,
} from "react-icons/md";
import { SiBasicattentiontoken } from "react-icons/si";
import { TbScanPosition } from "react-icons/tb";
import { VscCircuitBoard } from "react-icons/vsc";

export type SidebarMenuType = {
  id: string;
  title: string;
  icon: React.ReactNode;
  link: string;
  submenu?: SidebarMenuType[];
};
export const sidebarMenu: SidebarMenuType[] = [
  {
    id: shortId(),
    title: "Dashboard",
    icon: <MdOutlineDashboard />,
    link: getDashboardLink(),
  },
  {
    id: shortId(),
    title: "Employee",
    icon: <IoPeopleOutline />,
    link: getEmployeeLink(),
  },
  {
    id: shortId(),
    title: "Department",
    icon: <FiMonitor />,
    link: getDepartmentLink(),
  },
  {
    id: shortId(),
    title: "Designation",
    icon: <TbScanPosition />,
    link: getDesignationLink(),
  },
  {
    id: shortId(),
    title: "Role & Permission",
    icon: <MdOutlinePermDataSetting />,
    link: getRolePermissionLink(),
  },
  {
    id: shortId(),
    title: "Team Management",
    icon: <BiLogoUnity />,
    link: getTeamManagementLink(),
  },
  {
    id: shortId(),
    title: "Project & Task",
    icon: <LiaProjectDiagramSolid />,
    link: "",
    submenu: [
      {
        id: shortId(),
        title: "Projects",
        icon: <FaProjectDiagram />,
        link: getEmployeeAttendanceLink(),
      },
      {
        id: shortId(),
        title: "Tasks",
        icon: <GoTasklist />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: shortId(),
        title: "Task Board",
        icon: <VscCircuitBoard />,
        link: getBiometricAttendanceLink(),
      },
    ],
  },
  {
    id: shortId(),
    title: "Attendance",
    icon: <SiBasicattentiontoken />,
    link: "",
    submenu: [
      {
        id: shortId(),
        title: "Employee",
        icon: <IoMdCodeWorking />,
        link: getEmployeeAttendanceLink(),
      },
      {
        id: shortId(),
        title: "Biometric",
        icon: <FaFingerprint />,
        link: getBiometricAttendanceLink(),
      },
    ],
  },
  {
    id: shortId(),
    title: "Tickets",
    icon: <LiaTicketAltSolid />,
    link: getLeaveLink(),
  },
  {
    id: shortId(),
    title: "Leave",
    icon: <MdOutlineTimeToLeave />,
    link: getLeaveLink(),
  },
  {
    id: shortId(),
    title: "Calendar",
    icon: <CiCalendarDate />,
    link: getCalendarLink(),
  },
  {
    id: shortId(),
    title: "Performance Reviews",
    icon: <CgPerformance />,
    link: getPerformanceReviewsLink(),
  },
  {
    id: shortId(),
    title: "Payroll",
    icon: "",
    link: getPayrollLink(),
  },
  {
    id: shortId(),
    title: "Document",
    icon: "",
    link: getDocumentLink(),
  },
  {
    id: shortId(),
    title: "Reports",
    icon: <HiOutlineDocumentReport />,
    link: "",
    submenu: [
      {
        id: shortId(),
        title: "Expense Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: shortId(),
        title: "Invoice Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: shortId(),
        title: "Payments Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: shortId(),
        title: "Project Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: shortId(),
        title: "Task Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: shortId(),
        title: "User Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: shortId(),
        title: "Employee Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: shortId(),
        title: "Daily Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: shortId(),
        title: "Leave Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: shortId(),
        title: "Attendance Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: shortId(),
        title: "Payslip Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
    ],
  },
  {
    id: shortId(),
    title: "Settings",
    icon: "",
    link: getSettingsLink(),
  },
  {
    id: shortId(),
    title: "User Profile & Security",
    icon: "",
    link: "",
    submenu: [
      {
        id: shortId(),
        title: "User Profile",
        icon: <GrDocumentPerformance />,
        link: getUserProfileLink(),
      },
      {
        id: shortId(),
        title: "Security",
        icon: <GrDocumentPerformance />,
        link: getSecurityLink(),
      },
    ],
  },
  {
    id: shortId(),
    title: "Help & Support",
    icon: "",
    link: getHelpSupportLink(),
  },
  {
    id: shortId(),
    title: "Feedback & Suggestions",
    icon: "",
    link: getFeedbackSuggestionsLink(),
  },
];
