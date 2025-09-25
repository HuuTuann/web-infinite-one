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
        <Scroll.Area className="mr-1 h-full flex-1 overflow-hidden pr-1">
          <div className="p-5 pr-3">{children}</div>
        </Scroll.Area>
      </Sidebar>
    </Stack>
  );
}
