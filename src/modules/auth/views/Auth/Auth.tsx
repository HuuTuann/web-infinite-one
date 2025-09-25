"use client";

import { TabContents, TabOptions, Tabs } from "@/components";
import { AuthGuard } from "@/guards";

import { AuthTabs } from "./Auth.helpers";
import AuthComponents from "./components";

export const Auth = () => {
  const tabOptions: TabOptions[] = [
    { value: AuthTabs.LOGIN, label: "Login" },
    { value: AuthTabs.REGISTER, label: "Register" },
  ];

  const tabContents: TabContents[] = [
    { value: AuthTabs.LOGIN, children: <AuthComponents.Login /> },
    { value: AuthTabs.REGISTER, children: <AuthComponents.Register /> },
  ];

  return (
    <AuthGuard>
      <div className="flex min-h-screen w-full items-center justify-center">
        <Tabs
          defaultValue={AuthTabs.LOGIN}
          tabOptions={tabOptions}
          tabContents={tabContents}
          className="bg-muted w-md rounded-lg"
          listClassName="w-full"
          contentClassName="bg-background m-1 -mt-2 h-full rounded-sm"
        />
      </div>
    </AuthGuard>
  );
};
