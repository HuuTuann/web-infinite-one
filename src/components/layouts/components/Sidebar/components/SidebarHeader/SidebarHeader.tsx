/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";

import { Sidebar as AnimateUISidebar, useSidebar } from "@/animate-ui";
import { PATHS } from "@/lib";

export const SidebarHeader = () => {
  const router = useRouter();
  const { state } = useSidebar();

  return (
    <AnimateUISidebar.Header>
      <img
        src={state === "collapsed" ? "/icon.svg" : "/logo.svg"}
        alt="Infinite One Logo"
        className="max-h-[52px] cursor-pointer"
        onClick={() => router.push(`${PATHS.budgetExpenseDashboard}`)}
      />
    </AnimateUISidebar.Header>
  );
};
