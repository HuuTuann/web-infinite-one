"use client";

import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components";
import { AuthTabs, tabOptions } from "./AuthContainer.helpers";
import AuthComponents from "./components";

export const AuthContainer = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Tabs defaultValue={AuthTabs.LOGIN} className="w-md bg-muted rounded-lg">
        <TabsList className="w-full">
          {tabOptions.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContents className="m-1 -mt-2 rounded-sm h-full bg-background">
          <TabsContent value={AuthTabs.LOGIN}>
            <AuthComponents.Login />
          </TabsContent>
          <TabsContent value={AuthTabs.REGISTER}>
            <AuthComponents.Register />
          </TabsContent>
        </TabsContents>
      </Tabs>
    </div>
  );
};
