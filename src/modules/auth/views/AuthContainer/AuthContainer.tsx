"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/animate-ui";
import { PATHS } from "@/lib";
import { useAuthStore } from "@/stores";

import { AuthTabs, tabOptions } from "./AuthContainer.helpers";
import AuthComponents from "./components";

export const AuthContainer = () => {
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push(PATHS.root);
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Tabs defaultValue={AuthTabs.LOGIN} className="bg-muted w-md rounded-lg">
        <TabsList className="w-full">
          {tabOptions.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContents className="bg-background m-1 -mt-2 h-full rounded-sm">
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
