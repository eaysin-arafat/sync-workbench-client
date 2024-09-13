export interface DashboardResponse {
  success: boolean;
  data: DashboardType;
}

export interface DashboardType {
  totalEmployees: number;
  pendingEmployees: number;
  pendingLeaves: number;
  departmentsCount: number;
  totalProjects: number;
  totalTasks: number;
  completedTasks: number;
  ongoingTasks: number;
  totalSkills: number;
  totalCertifications: number;
  recentPerformanceReviews: any[];
  recentPayrolls: any[];
  upcomingBirthdays: UpcomingBirthday[];
}

export interface UpcomingBirthday {
  username: string;
  email: string;
  date_of_birth: string;
  avatar: any;
}
