import { RequireAuth } from "@/components";

export default async function BudgetExpensePage() {
  return (
    <RequireAuth>
      <div>Dashboard</div>
    </RequireAuth>
  );
}
