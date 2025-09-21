"use client";

import { Scroll, Stack } from "@/components";

import { Header, Sidebar } from "../components";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export function BaseLayout({ children }: Props) {
  return (
    <Stack className="h-screen w-screen">
      <Sidebar>
        <Header />
        <div className="flex-1 overflow-hidden bg-slate-50 pr-2">
          <Scroll.Area className="h-full p-4">{children}</Scroll.Area>
        </div>
      </Sidebar>
    </Stack>
  );
}
