import { RequireAuth } from "@/guards";

export default async function BudgetExpensePage() {
  return (
    <RequireAuth>
      <div>Dashboard</div>
    </RequireAuth>
  );
}
