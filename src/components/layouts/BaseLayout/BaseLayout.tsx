"use client";

import { Stack } from "@/io-ui";
import { ScrollArea } from "@/shadcn-ui";

import { Header, Sidebar } from "../components";

export function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack className="h-screen w-screen">
      <Sidebar>
        <Header />
        <div className="flex-1 overflow-hidden bg-slate-50 pr-1">
          <ScrollArea className="h-full p-4">{children}</ScrollArea>
        </div>
      </Sidebar>
    </Stack>
  );
}
