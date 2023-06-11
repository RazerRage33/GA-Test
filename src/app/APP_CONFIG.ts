/**
 * web api link
 */
export const API_URL: string = 'http://localhost:5087/api/';
// export const API_URL: string = 'http://20.188.105.191:80/ASTRIO_IRS/WS/api/';

/**
 * to set all API request with
 * specified options
 */
export const HTTP_OPTION = {
  withCredentials: true,
} as const;

/**
 * array of routes within the webpage
 */
export const ROUTE = {
  LOGIN: '',
  FORGOT_PASSWORD: 'forgot-password',
  RESET_PASSWORD: 'reset-password',
  DASHBOARD: 'dashboard',
  COMPANY: 'company',
  CONTRACT: 'company/contract',
  PROJECT: 'project',
  TICKET: 'ticket',
  JOB: 'job',
  JOB_ACTION: 'job/action',
  REPORT: 'job/report',
  USER: 'user',
  PROFILE: 'profile',
} as const;

/**
 * array of acceptable
 * image types
 */
export const IMAGE_FILE_TYPE: string[] = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/gif',
];

/**
 * array of status for table
 */
export const TABLE_STATUS: string[] = ['Ongoing', 'Completed'];
