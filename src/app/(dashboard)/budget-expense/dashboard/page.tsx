import { RequireAuth } from "@/guards";

export default function BudgetExpenseDashboardPage() {
  return (
    <RequireAuth>
      <div>Dashboard</div>
    </RequireAuth>
  );
}
