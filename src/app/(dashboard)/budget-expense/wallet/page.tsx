import { RequireAuth } from "@/components";

export default function BudgetExpenseWalletPage() {
  return (
    <RequireAuth>
      <div>Wallet</div>
    </RequireAuth>
  );
}
