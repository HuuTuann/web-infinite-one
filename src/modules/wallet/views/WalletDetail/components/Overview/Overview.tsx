import { lazy, useMemo } from "react";

import { Card, TabContents, Tabs } from "@/components";

import OverviewHelpers, { OverviewTabs } from "./Overview.helpers";

const AccountsTab = lazy(() => import("./sections/Accounts"));
const OverviewTab = lazy(() => import("./sections/Overview"));

export const Overview = () => {
  const renderTabContents: TabContents[] = useMemo(
    () => [
      { value: OverviewTabs.OVERVIEW, children: <OverviewTab /> },
      { value: OverviewTabs.ACCOUNTS, children: <AccountsTab /> },
    ],
    []
  );

  return (
    <Card>
      <Tabs
        defaultValue={OverviewTabs.OVERVIEW}
        tabOptions={OverviewHelpers.tabOptions}
        tabContents={renderTabContents}
        contentClassName="-m-2"
      />
    </Card>
  );
};
