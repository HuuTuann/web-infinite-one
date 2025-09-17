import { Card } from "@/shadcn-ui";

import { Wallet } from "../Wallet";
import { WalletToolbar } from "../WalletToolbar";

export const WalletContainer = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Wallet</Card.Title>
      </Card.Header>
      <Card.Content>
        <div className="flex flex-col gap-4">
          <WalletToolbar />
          <Wallet />
        </div>
      </Card.Content>
    </Card>
  );
};
