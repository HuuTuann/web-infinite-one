import { PATHS } from "@/lib";

const titles = {
  [PATHS.budgetExpenseDashboard]: "Budget & Expense Dashboard",
  [PATHS.budgetExpenseWallet]: "Budget & Expense Wallet",
} as const;

export const HeaderHelpers = {
  titles,
};
