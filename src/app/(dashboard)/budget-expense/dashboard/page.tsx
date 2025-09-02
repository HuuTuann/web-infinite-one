import { RequireAuth } from "@/components";

export default function BudgetExpenseDashboardPage() {
  return (
    <RequireAuth>
      <div>Dashboard</div>
    </RequireAuth>
  );
}
