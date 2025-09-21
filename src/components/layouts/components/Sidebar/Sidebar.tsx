import SidebarAnimate from "../../../ui/frameworks/animate-ui/components/radix/sidebar";

import { SidebarContent } from "./Sidebar.Content";
import { SidebarHeader } from "./Sidebar.Header";

type Props = {
  children: React.ReactNode;
};

export const Sidebar = ({ children }: Props) => {
  return (
    <SidebarAnimate.Provider>
      <SidebarAnimate collapsible="icon">
        <Sidebar.Header />
        <Sidebar.Content />
      </SidebarAnimate>

      <SidebarAnimate.Inset>{children}</SidebarAnimate.Inset>
    </SidebarAnimate.Provider>
  );
};

Sidebar.Header = SidebarHeader;
Sidebar.Content = SidebarContent;
