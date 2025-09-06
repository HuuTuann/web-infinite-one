import React, { useMemo } from "react";
import { usePathname } from "next/navigation";

import { ChevronRight } from "lucide-react";

import { Collapsible, Sidebar as AnimateUISidebar } from "@/animate-ui";
import { isEmpty, PathKey } from "@/lib";

import SidebarHelpers, {
  SidebarMenu as ISidebarMenu,
} from "../../Sidebar.helpers";

type SidebarMenuProps = {
  sidebarMenus: ISidebarMenu[];
};
function SidebarMenu({ sidebarMenus }: SidebarMenuProps) {
  return (
    <AnimateUISidebar.Menu>
      {sidebarMenus.map(
        ({ title, url, icon: IconComponent, items, isActive }, index) => {
          const isOpen = items?.some((item) => item.isActive);
          const isEmptyUrl = isEmpty(url);
          const isEmptyItems = isEmpty(items);

          if (isEmptyUrl && isEmptyItems) return null;

          if (isEmptyUrl && !isEmptyItems)
            return (
              <Collapsible
                key={index}
                asChild
                defaultOpen={isOpen}
                className="group/collapsible"
              >
                <AnimateUISidebar.MenuItem>
                  <Collapsible.Trigger asChild>
                    <AnimateUISidebar.MenuButton tooltip={title}>
                      <IconComponent />
                      <span>{title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90" />
                    </AnimateUISidebar.MenuButton>
                  </Collapsible.Trigger>
                  <Collapsible.Content>
                    <AnimateUISidebar.MenuSub>
                      {items?.map(({ title, url, isActive }, index) => (
                        <AnimateUISidebar.MenuSubItem key={index}>
                          <AnimateUISidebar.MenuSubButton
                            asChild
                            isActive={isActive}
                          >
                            <a href={url}>
                              <span>{title}</span>
                            </a>
                          </AnimateUISidebar.MenuSubButton>
                        </AnimateUISidebar.MenuSubItem>
                      ))}
                    </AnimateUISidebar.MenuSub>
                  </Collapsible.Content>
                </AnimateUISidebar.MenuItem>
              </Collapsible>
            );

          if (!isEmptyUrl && isEmptyItems)
            return (
              <AnimateUISidebar.MenuItem key={index}>
                <AnimateUISidebar.MenuButton asChild isActive={isActive}>
                  <a href={url}>
                    <IconComponent />
                    <span>{title}</span>
                  </a>
                </AnimateUISidebar.MenuButton>
              </AnimateUISidebar.MenuItem>
            );

          return null;
        }
      )}
    </AnimateUISidebar.Menu>
  );
}

export const SidebarContent = () => {
  const pathname = usePathname() as PathKey;
  const sidebarGroupsActive = useMemo(
    () => SidebarHelpers.getSidebarGroupsActive(pathname),
    [pathname]
  );

  return (
    <AnimateUISidebar.Content>
      <AnimateUISidebar.Group>
        {sidebarGroupsActive.map(({ title, menus }, index) => (
          <React.Fragment key={index}>
            <AnimateUISidebar.GroupLabel key={index}>
              {title}
            </AnimateUISidebar.GroupLabel>
            <SidebarMenu sidebarMenus={menus} />
          </React.Fragment>
        ))}
      </AnimateUISidebar.Group>
    </AnimateUISidebar.Content>
  );
};
