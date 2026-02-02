export const ROLES = {
  PMU: 'PMU',
  PIU: 'PIU',
  AE: 'AE',
  JE: 'JE',
  CONTRACTOR: 'CONTRACTOR',
  AUTHORITY_ENGINEER: 'AUTHORITY_ENGINEER',
  IVA: 'IVA',
  LENDER: 'LENDER',
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];

// Role display names
export const ROLE_NAMES: Record<Role, string> = {
  PMU: 'Project Management Unit',
  PIU: 'Project Implementation Unit',
  AE: 'Assistant Engineer',
  JE: 'Junior Engineer',
  CONTRACTOR: 'Contractor',
  AUTHORITY_ENGINEER: 'Authority Engineer',
  IVA: 'Independent Verification Agency',
  LENDER: 'Lender',
};

// Navigation menu structure for each role - UPDATED WITH ALL SCREENS
export const ROLE_NAVIGATION: Record<Role, string[]> = {
  PMU: [
    'Dashboard',
    'Projects',
    'Finance',
    'Contracts',
    'Compliance',
    'Quality',
    'Road Safety',
    'DLI',
    'Reports',
    'Admin'
  ],
  PIU: [
    'Dashboard',
    'Projects',
    'Progress',
    'Finance',
    'Payments',
    'Contracts',
    'Quality',
    'Reports'
  ],
  AE: [
    'Dashboard',
    'Progress',
    'Inspections',
    'Quality',
    'Certification',
    'Compliance'
  ],
  JE: [
    'Dashboard',
    'Progress',
    'MB Entry',
    'Daily Logs'
  ],
  CONTRACTOR: [
    'Dashboard',
    'My Packages',
    'Progress',
    'Bills',
    'Quality',
    'Compliance'
  ],
  AUTHORITY_ENGINEER: [
    'Dashboard',
    'Progress',
    'Inspections',
    'Quality',
    'Certification',
    'Compliance'
  ],
  IVA: [
    'Dashboard',
    'DLI'
  ],
  LENDER: [
    'Dashboard',
    'DLI',
    'Disbursement',
    'Reports'
  ],
};

// Check if a role has access to a specific page
export function hasAccessToPage(role: Role, page: string): boolean {
  return ROLE_NAVIGATION[role].includes(page);
}

// Get default page for a role
export function getDefaultPage(role: Role): string {
  return ROLE_NAVIGATION[role][0] || 'Dashboard';
}