export const PREFIX = {
  budgetExpense: "/budget-expense",
};
export const PATHS = {
  root: "/",
  auth: "/auth",
  budgetExpense: PREFIX.budgetExpense,
  budgetExpenseDashboard: `${PREFIX.budgetExpense}/dashboard`,
} as const;

export type PathKey = keyof typeof PATHS;
export type PathValue = (typeof PATHS)[PathKey];

export const getPath = (key: PathKey): PathValue => PATHS[key];
