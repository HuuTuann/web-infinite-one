import { PATHS } from "@/lib";

const titleMap = {
  [PATHS.budgetExpense]: "Budget & Expense",
  [PATHS.budgetExpenseDashboard]: "Budget & Expense",
  [PATHS.budgetExpenseWallet]: "Budget & Expense",
} as const;

export const HeaderHelpers = {
  titleMap,
};
