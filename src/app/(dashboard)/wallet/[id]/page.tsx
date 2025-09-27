import { RequireAuth } from "@/guards";
import { WalletDetail } from "@/modules/wallet/views";

export default function WalletDetailPage() {
  return (
    <RequireAuth>
      <WalletDetail />
    </RequireAuth>
  );
}
