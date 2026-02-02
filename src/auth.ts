import { ROLES } from './roles';
import type { Role } from './roles';

export const USERS: Record<string, Role> = {
  pmu: ROLES.PMU,
  piu: ROLES.PIU,
  ae: ROLES.AE,
  je: ROLES.JE,
  contractor: ROLES.CONTRACTOR,
  authority: ROLES.AUTHORITY_ENGINEER,
  iva: ROLES.IVA,
  lender: ROLES.LENDER,
};

export function loginUser(
  username: string,
  password: string
): Role | null {
  if (password === '1234' && USERS[username]) {
    return USERS[username];
  }
  return null;
}

export function logout(): void {
  // Clear any session data if needed
  sessionStorage.clear();
  localStorage.clear();
}