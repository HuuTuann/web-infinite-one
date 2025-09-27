import { RequireAuth } from "@/guards";
import { Wallets } from "@/modules/wallet/views";

export default function WalletsPage() {
  return (
    <RequireAuth>
      <Wallets />
    </RequireAuth>
  );
}
