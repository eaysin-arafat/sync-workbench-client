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
import { getShortId } from "@/utils/generate-shortid";
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
    id: getShortId(),
    title: "Dashboard",
    icon: <MdOutlineDashboard />,
    link: getDashboardLink(),
  },
  {
    id: getShortId(),
    title: "Employee",
    icon: <IoPeopleOutline />,
    link: getEmployeeLink(),
  },
  {
    id: getShortId(),
    title: "Department",
    icon: <FiMonitor />,
    link: getDepartmentLink(),
  },
  {
    id: getShortId(),
    title: "Designation",
    icon: <TbScanPosition />,
    link: getDesignationLink(),
  },
  {
    id: getShortId(),
    title: "Role & Permission",
    icon: <MdOutlinePermDataSetting />,
    link: getRolePermissionLink(),
  },
  {
    id: getShortId(),
    title: "Team Management",
    icon: <BiLogoUnity />,
    link: getTeamManagementLink(),
  },
  {
    id: getShortId(),
    title: "Project & Task",
    icon: <LiaProjectDiagramSolid />,
    link: "",
    submenu: [
      {
        id: getShortId(),
        title: "Projects",
        icon: <FaProjectDiagram />,
        link: getEmployeeAttendanceLink(),
      },
      {
        id: getShortId(),
        title: "Tasks",
        icon: <GoTasklist />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: getShortId(),
        title: "Task Board",
        icon: <VscCircuitBoard />,
        link: getBiometricAttendanceLink(),
      },
    ],
  },
  {
    id: getShortId(),
    title: "Attendance",
    icon: <SiBasicattentiontoken />,
    link: "",
    submenu: [
      {
        id: getShortId(),
        title: "Employee",
        icon: <IoMdCodeWorking />,
        link: getEmployeeAttendanceLink(),
      },
      {
        id: getShortId(),
        title: "Biometric",
        icon: <FaFingerprint />,
        link: getBiometricAttendanceLink(),
      },
    ],
  },
  {
    id: getShortId(),
    title: "Tickets",
    icon: <LiaTicketAltSolid />,
    link: getLeaveLink(),
  },
  {
    id: getShortId(),
    title: "Leave",
    icon: <MdOutlineTimeToLeave />,
    link: getLeaveLink(),
  },
  {
    id: getShortId(),
    title: "Calendar",
    icon: <CiCalendarDate />,
    link: getCalendarLink(),
  },
  {
    id: getShortId(),
    title: "Performance Reviews",
    icon: <CgPerformance />,
    link: getPerformanceReviewsLink(),
  },
  {
    id: getShortId(),
    title: "Payroll",
    icon: "",
    link: getPayrollLink(),
  },
  {
    id: getShortId(),
    title: "Document",
    icon: "",
    link: getDocumentLink(),
  },
  {
    id: getShortId(),
    title: "Reports",
    icon: <HiOutlineDocumentReport />,
    link: "",
    submenu: [
      {
        id: getShortId(),
        title: "Expense Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: getShortId(),
        title: "Invoice Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: getShortId(),
        title: "Payments Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: getShortId(),
        title: "Project Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: getShortId(),
        title: "Task Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: getShortId(),
        title: "User Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: getShortId(),
        title: "Employee Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: getShortId(),
        title: "Daily Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: getShortId(),
        title: "Leave Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: getShortId(),
        title: "Attendance Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
      {
        id: getShortId(),
        title: "Payslip Report",
        icon: <HiOutlineDocumentReport />,
        link: getBiometricAttendanceLink(),
      },
    ],
  },
  {
    id: getShortId(),
    title: "Settings",
    icon: "",
    link: getSettingsLink(),
  },
  {
    id: getShortId(),
    title: "User Profile & Security",
    icon: "",
    link: "",
    submenu: [
      {
        id: getShortId(),
        title: "User Profile",
        icon: <GrDocumentPerformance />,
        link: getUserProfileLink(),
      },
      {
        id: getShortId(),
        title: "Security",
        icon: <GrDocumentPerformance />,
        link: getSecurityLink(),
      },
    ],
  },
  {
    id: getShortId(),
    title: "Help & Support",
    icon: "",
    link: getHelpSupportLink(),
  },
  {
    id: getShortId(),
    title: "Feedback & Suggestions",
    icon: "",
    link: getFeedbackSuggestionsLink(),
  },
];
