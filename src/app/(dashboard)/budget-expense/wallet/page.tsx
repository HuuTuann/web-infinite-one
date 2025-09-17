import { RequireAuth } from "@/components";
import { WalletContainer } from "@/modules/budgetExpense/wallet/views/WalletContainer/WalletContainer";

export default function BudgetExpenseWalletPage() {
  return (
    <RequireAuth>
      <WalletContainer />
    </RequireAuth>
  );
}
