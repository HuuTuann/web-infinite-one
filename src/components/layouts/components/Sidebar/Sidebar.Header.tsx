/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";

import { PATHS } from "@/lib";

import SidebarAnimate from "../../../ui/frameworks/animate-ui/components/radix/sidebar";

export const SidebarHeader = () => {
  const router = useRouter();

  return (
    <SidebarAnimate.Header>
      <img
        src="/logo.svg"
        alt="Infinite One Logo"
        className="max-h-[52px] cursor-pointer"
        onClick={() => router.push(`${PATHS.budgetExpenseDashboard}`)}
      />
    </SidebarAnimate.Header>
  );
};
