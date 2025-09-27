/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";

import { Sidebar } from "@/frameworks-animate-ui/components/radix";
import { PATHS } from "@/lib";

export const SidebarHeader = () => {
  const router = useRouter();

  return (
    <Sidebar.Header>
      <img
        src="/logo.svg"
        alt="Infinite One Logo"
        className="max-h-[52px] cursor-pointer"
        onClick={() => router.push(`${PATHS.wallets}`)}
      />
    </Sidebar.Header>
  );
};
