export interface ContentTypes {
  data: ContentType[];
}

interface ContentType {
  uid: string;
  plugin?: string;
  apiID: string;
  schema: Schema;
}

interface Schema {
  draftAndPublish: boolean;
  displayName: string;
  singularName: string;
  pluralName: string;
  description: string;
  pluginOptions?: PluginOptions;
  kind: string;
  collectionName: string;
  attributes: Attributes;
  visible: boolean;
  restrictRelationsTo?: string[];
}

interface PluginOptions {
  "content-manager"?: ContentManager;
  "content-type-builder"?: ContentTypeBuilder;
}

interface ContentManager {
  visible: boolean;
}

interface ContentTypeBuilder {
  visible: boolean;
}

interface Attributes {
  action?: Action;
  actionParameters?: ActionParameters;
  subject?: Subject;
  properties?: Properties;
  conditions?: Conditions;
  role?: Role;
  firstname?: Firstname;
  lastname?: Lastname;
  username?: Username;
  email?: Email;
  password?: Password;
  resetPasswordToken?: ResetPasswordToken;
  registrationToken?: RegistrationToken;
  isActive?: IsActive;
  roles?: Roles;
  blocked?: Blocked;
  preferedLanguage?: PreferedLanguage;
  name?: Name;
  code?: Code;
  description?: Description;
  users?: Users;
  permissions?: Permissions;
  type?: Type;
  accessKey?: AccessKey;
  lastUsedAt?: LastUsedAt;
  expiresAt?: ExpiresAt;
  lifespan?: Lifespan;
  token?: Token;
  alternativeText?: AlternativeText;
  caption?: Caption;
  width?: Width;
  height?: Height;
  formats?: Formats;
  hash?: Hash;
  ext?: Ext;
  mime?: Mime;
  size?: Size;
  url?: Url;
  previewUrl?: PreviewUrl;
  provider?: Provider;
  provider_metadata?: ProviderMetadata;
  related?: Related;
  folder?: Folder;
  folderPath?: FolderPath;
  pathId?: PathId;
  parent?: Parent;
  children?: Children;
  files?: Files;
  path?: Path;
  releasedAt?: ReleasedAt;
  scheduledAt?: ScheduledAt;
  timezone?: Timezone;
  status?: Status;
  actions?: Actions;
  entry?: Entry;
  contentType?: ContentType;
  locale?: Locale;
  release?: Release;
  isEntryValid?: IsEntryValid;
  confirmationToken?: ConfirmationToken;
  confirmed?: Confirmed;
  avatar?: Avatar;
  first_name?: FirstName;
  last_name?: LastName;
  position_name?: PositionName;
  address?: Address;
  state?: State;
  city?: City;
  country?: Country;
  date_of_birth?: DateOfBirth;
  phone?: Phone;
  zip_code?: ZipCode;
  employee_skill?: EmployeeSkill;
  employee_certification?: EmployeeCertification;
  work_experiences?: WorkExperiences;
  position?: Position;
  access_control_name?: AccessControlName;
  employee_access_control?: EmployeeAccessControl;
  employee?: Employee;
  date?: Date;
  check_in_time?: CheckInTime;
  check_out_time?: CheckOutTime;
  certification_name?: CertificationName;
  issuing_organization?: IssuingOrganization;
  issue_date?: IssueDate;
  expiry_date?: ExpiryDate;
  employee_certifications?: EmployeeCertifications;
  department_name?: DepartmentName;
  location?: Location;
  photo?: Photo;
  manager?: Manager;
  projects?: Projects;
  employees?: Employees;
  document_type?: DocumentType;
  document_name?: DocumentName;
  document_url?: DocumentUrl;
  upload_date?: UploadDate;
  date_of_hire?: DateOfHire;
  salary?: Salary;
  is_internship?: IsInternship;
  attendances?: Attendances;
  documents?: Documents;
  reporting_employees?: ReportingEmployees;
  tasks?: Tasks;
  leaves?: Leaves;
  performance_reviews?: PerformanceReviews;
  payrolls?: Payrolls;
  user_info?: UserInfo;
  manager_of_departments?: ManagerOfDepartments;
  employee_of_departments?: EmployeeOfDepartments;
  employee_status?: EmployeeStatus;
  identity?: Identity;
  employment_status?: EmploymentStatus;
  department?: Department;
  access_controls?: AccessControls;
  certification_id?: CertificationId;
  obtained_date?: ObtainedDate;
  proficiency_level?: ProficiencyLevel;
  skill_id?: SkillId;
  leave_type?: LeaveType;
  start_date?: StartDate;
  end_date?: EndDate;
  reason?: Reason;
  salary_date?: SalaryDate;
  gross_salary?: GrossSalary;
  tax_deduction?: TaxDeduction;
  net_salary?: NetSalary;
  review_date?: ReviewDate;
  review_period_start?: ReviewPeriodStart;
  review_period_end?: ReviewPeriodEnd;
  overall_rating?: OverallRating;
  comments?: Comments;
  project_name?: ProjectName;
  project_manager?: ProjectManager;
  skill_name?: SkillName;
  employee_skills?: EmployeeSkills;
  task_name?: TaskName;
  priority?: Priority;
  due_date?: DueDate;
  project_id?: ProjectId;
  company_name?: CompanyName;
  job_title?: JobTitle;
  user?: User;
}

interface Action {
  type: string;
  required: boolean;
  configurable: boolean;
  minLength?: number;
}

interface ActionParameters {
  type: string;
  configurable: boolean;
  required: boolean;
  default: null;
}

interface Subject {
  type: string;
  minLength: number;
  configurable: boolean;
  required: boolean;
}

interface Properties {
  type: string;
  configurable: boolean;
  required: boolean;
  default: null;
}


interface Conditions {
  type: string;
  configurable: boolean;
  required: boolean;
  default: any[];
}

interface Role {
  type: string;
  relation: string;
  target: string;
  inversedBy: string;
  configurable: boolean;
  targetAttribute: string;
  private: boolean;
}

interface Firstname {
  type: string;
  unique: boolean;
  minLength: number;
  configurable: boolean;
  required: boolean;
}

interface Lastname {
  type: string;
  unique: boolean;
  minLength: number;
  configurable: boolean;
  required: boolean;
}

interface Username {
  type: string;
  minLength?: number;
  unique: boolean;
  configurable: boolean;
  required: boolean;
}

interface Email {
  type: string;
  minLength: number;
  configurable: boolean;
  required: boolean;
  unique?: boolean;
  private?: boolean;
}

interface Password {
  type: string;
  minLength: number;
  configurable: boolean;
  private: boolean;
  searchable: boolean;
  required?: boolean;
}

interface ResetPasswordToken {
  type: string;
  configurable: boolean;
  private: boolean;
  searchable: boolean;
}

interface RegistrationToken {
  type: string;
  configurable: boolean;
  private: boolean;
  searchable: boolean;
}

interface IsActive {
  type: string;
  default: boolean;
  configurable: boolean;
  private: boolean;
}

interface Roles {
  configurable: boolean;
  private: boolean;
  type: string;
  relation: string;
  inversedBy: string;
  target: string;
  collectionName: string;
  targetAttribute: string;
}

interface Blocked {
  type: string;
  default: boolean;
  configurable: boolean;
  private?: boolean;
}

interface PreferedLanguage {
  type: string;
  configurable: boolean;
  required: boolean;
  searchable: boolean;
}

interface Name {
  type: string;
  required?: boolean;
  unique?: boolean;
  minLength?: number;
  configurable?: boolean;
  min?: number;
  max?: number;
}

interface Code {
  type: string;
  unique: boolean;
  configurable: boolean;
  minLength?: number;
  required?: boolean;
}

interface Description {
  type: string;
  configurable?: boolean;
  minLength?: number;
  required?: boolean;
  default?: string;
}

interface Users {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
  configurable?: boolean;
}

interface Permissions {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  configurable: boolean;
  targetAttribute: string;
  private: boolean;
  required?: boolean;
}

interface Type {
  type: string;
  unique?: boolean;
  configurable?: boolean;
  enum?: string[];
  required?: boolean;
  default?: string;
}

interface AccessKey {
  type: string;
  minLength: number;
  configurable: boolean;
  required: boolean;
  searchable?: boolean;
}

interface LastUsedAt {
  type: string;
  configurable: boolean;
  required: boolean;
}

interface ExpiresAt {
  type: string;
  configurable: boolean;
  required: boolean;
}

interface Lifespan {
  type: string;
  configurable: boolean;
  required: boolean;
}

interface Token {
  configurable: boolean;
  type: string;
  relation: string;
  inversedBy: string;
  target: string;
  targetAttribute: string;
  private: boolean;
}

interface AlternativeText {
  type: string;
  configurable: boolean;
}

interface Caption {
  type: string;
  configurable: boolean;
}

interface Width {
  type: string;
  configurable: boolean;
}

interface Height {
  type: string;
  configurable: boolean;
}

interface Formats {
  type: string;
  configurable: boolean;
}

interface Hash {
  type: string;
  configurable: boolean;
  required: boolean;
}

interface Ext {
  type: string;
  configurable: boolean;
}

interface Mime {
  type: string;
  configurable: boolean;
  required: boolean;
}

interface Size {
  type: string;
  configurable: boolean;
  required: boolean;
}

interface Url {
  type: string;
  configurable: boolean;
  required: boolean;
}

interface PreviewUrl {
  type: string;
  configurable: boolean;
}

interface Provider {
  type: string;
  configurable: boolean;
  required?: boolean;
}

interface ProviderMetadata {
  type: string;
  configurable: boolean;
}

interface Related {
  type: string;
  relation: string;
  configurable: boolean;
  targetAttribute: any;
  private: boolean;
}

interface Folder {
  type: string;
  relation: string;
  target: string;
  inversedBy: string;
  private: boolean;
  targetAttribute: string;
}

interface FolderPath {
  type: string;
  min: number;
  required: boolean;
  private: boolean;
  searchable: boolean;
}

interface PathId {
  type: string;
  unique: boolean;
  required: boolean;
}

interface Parent {
  type: string;
  relation: string;
  target: string;
  inversedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface Children {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface Files {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface Path {
  type: string;
  min: number;
  required: boolean;
}

interface ReleasedAt {
  type: string;
}

interface ScheduledAt {
  type: string;
}

interface Timezone {
  type: string;
}

interface Status {
  type: string;
  required?: boolean;
  enum?: string[];
}

interface Actions {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface Entry {
  type: string;
  relation: string;
  configurable: boolean;
  targetAttribute: any;
  private: boolean;
}

interface ContentType {
  type: string;
  required: boolean;
}

interface Locale {
  type: string;
}

interface Release {
  type: string;
  relation: string;
  target: string;
  inversedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface IsEntryValid {
  type: string;
}

interface ConfirmationToken {
  type: string;
  configurable: boolean;
  private: boolean;
  searchable: boolean;
}

interface Confirmed {
  type: string;
  default: boolean;
  configurable: boolean;
}

interface Avatar {
  type: string;
  multiple: boolean;
  required: boolean;
  private: boolean;
  allowedTypes: string[];
}

interface FirstName {
  type: string;
  required: boolean;
}

interface LastName {
  type: string;
  required: boolean;
}

interface PositionName {
  type: string;
  required: boolean;
}

interface Address {
  type: string;
}

interface State {
  type: string;
}

interface City {
  type: string;
}

interface Country {
  type: string;
}

interface DateOfBirth {
  type: string;
  required: boolean;
}

interface Phone {
  required: boolean;
  type: string;
}

interface ZipCode {
  type: string;
}

interface EmployeeSkill {
  type: string;
  relation: string;
  target: string;
  targetAttribute: any;
  private: boolean;
}

interface EmployeeCertification {
  type: string;
  relation: string;
  target: string;
  targetAttribute: any;
  private: boolean;
}

interface WorkExperiences {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface Position {
  type: string;
  relation: string;
  target: string;
  inversedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface AccessControlName {
  type: string;
  required: boolean;
  unique: boolean;
}

interface EmployeeAccessControl {
  type: string;
  relation: string;
  target: string;
  inversedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface Employee {
  type: string;
  relation: string;
  target: string;
  inversedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface Date {
  type: string;
  required: boolean;
}

interface CheckInTime {
  type: string;
  required: boolean;
}

interface CheckOutTime {
  type: string;
  required: boolean;
}

interface CertificationName {
  type: string;
  required: boolean;
  unique: boolean;
}

interface IssuingOrganization {
  type: string;
  required: boolean;
  unique: boolean;
}

interface IssueDate {
  type: string;
  required: boolean;
}

interface ExpiryDate {
  type: string;
  required?: boolean;
}

interface EmployeeCertifications {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface DepartmentName {
  type: string;
  required: boolean;
  unique: boolean;
}

interface Location {
  type: string;
}

interface Photo {
  type: string;
  multiple: boolean;
  required: boolean;
  private: boolean;
  allowedTypes: string[];
}

interface Manager {
  type: string;
  relation: string;
  target: string;
  targetAttribute: any;
  private: boolean;
}

interface Projects {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface Employees {
  type: string;
  relation: string;
  target: string;
  inversedBy?: string;
  targetAttribute: string;
  private: boolean;
  mappedBy?: string;
}

interface DocumentType {
  type: string;
  required: boolean;
}

interface DocumentName {
  type: string;
  required: boolean;
}

interface DocumentUrl {
  type: string;
  required: boolean;
}

interface UploadDate {
  type: string;
  required: boolean;
}

interface DateOfHire {
  type: string;
  required: boolean;
}

interface Salary {
  type: string;
  required: boolean;
}

interface IsInternship {
  type: string;
  required: boolean;
}

interface Attendances {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface Documents {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface ReportingEmployees {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface Tasks {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface Leaves {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface PerformanceReviews {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface Payrolls {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface UserInfo {
  type: string;
  relation: string;
  target: string;
  targetAttribute: any;
  private: boolean;
}

interface ManagerOfDepartments {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface EmployeeOfDepartments {
  type: string;
  relation: string;
  target: string;
  targetAttribute: any;
  private: boolean;
}

interface EmployeeStatus {
  type: string;
  relation: string;
  target: string;
  targetAttribute: any;
  private: boolean;
}

interface Identity {
  type: string;
  options: Options;
  customField: string;
}

interface Options {
  "uuid-format": string;
  "disable-regenerate": boolean;
}

interface EmploymentStatus {
  type: string;
  relation: string;
  target: string;
  targetAttribute: any;
  private: boolean;
}

interface Department {
  type: string;
  relation: string;
  target: string;
  inversedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface AccessControls {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface CertificationId {
  type: string;
  relation: string;
  target: string;
  inversedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface ObtainedDate {
  type: string;
  required: boolean;
}

interface ProficiencyLevel {
  type: string;
}

interface SkillId {
  type: string;
  relation: string;
  target: string;
  inversedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface LeaveType {
  type: string;
  required: boolean;
}

interface StartDate {
  type: string;
  required?: boolean;
}

interface EndDate {
  type: string;
  required?: boolean;
}

interface Reason {
  type: string;
  required: boolean;
}

interface SalaryDate {
  type: string;
  required: boolean;
}

interface GrossSalary {
  type: string;
  required: boolean;
}

interface TaxDeduction {
  type: string;
  required: boolean;
  unique: boolean;
}

interface NetSalary {
  type: string;
  required: boolean;
}

interface ReviewDate {
  type: string;
  required: boolean;
}

interface ReviewPeriodStart {
  type: string;
}

interface ReviewPeriodEnd {
  type: string;
  required: boolean;
}

interface OverallRating {
  type: string;
  required: boolean;
}

interface Comments {
  type: string;
}

interface ProjectName {
  type: string;
  required: boolean;
}

interface ProjectManager {
  type: string;
  relation: string;
  target: string;
  targetAttribute: any;
  private: boolean;
}

interface SkillName {
  type: string;
  required: boolean;
  unique: boolean;
}

interface EmployeeSkills {
  type: string;
  relation: string;
  target: string;
  mappedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface TaskName {
  type: string;
  required: boolean;
}

interface Priority {
  type: string;
  required: boolean;
}

interface DueDate {
  type: string;
}

interface ProjectId {
  type: string;
  relation: string;
  target: string;
  inversedBy: string;
  targetAttribute: string;
  private: boolean;
}

interface CompanyName {
  type: string;
  required: boolean;
}

interface JobTitle {
  type: string;
  required: boolean;
}

interface User {
  type: string;
  relation: string;
  target: string;
  inversedBy: string;
  targetAttribute: string;
  private: boolean;
}
