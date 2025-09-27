import { Fragment, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

import { ChevronRight } from "lucide-react";

import { Sidebar } from "@/frameworks-animate-ui/components/radix";
import { CollapsiblePrimitive } from "@/frameworks-animate-ui/primitives/radix";
import { isEmpty, PathKey } from "@/lib";

import SidebarHelpers, { type SidebarMenu } from "./Sidebar.helpers";

type SidebarMenuProps = {
  sidebarMenus: SidebarMenu[];
};

const SidebarMenu = ({ sidebarMenus }: SidebarMenuProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const onNavigate = useCallback(
    (url?: string) => {
      if (!url || pathname.startsWith(url)) return;

      router.push(url);
    },
    [router, pathname]
  );

  return (
    <Sidebar.Menu>
      {sidebarMenus.map(
        ({ title, url, icon: IconComponent, items, isActive }, index) => {
          const isOpen = items?.some((item) => item.isActive);
          const isEmptyUrl = isEmpty(url);
          const isEmptyItems = isEmpty(items);

          if (isEmptyUrl && isEmptyItems) return null;

          if (isEmptyUrl && !isEmptyItems)
            return (
              <CollapsiblePrimitive
                key={index}
                asChild
                defaultOpen={isOpen}
                className="group/collapsible"
              >
                <Sidebar.MenuItem>
                  <CollapsiblePrimitive.Trigger asChild>
                    <Sidebar.MenuButton tooltip={title}>
                      <IconComponent />
                      <span>{title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90" />
                    </Sidebar.MenuButton>
                  </CollapsiblePrimitive.Trigger>
                  <CollapsiblePrimitive.Content>
                    <Sidebar.MenuSub>
                      {items?.map(({ title, url, isActive }, index) => (
                        <Sidebar.MenuSubItem key={index}>
                          <Sidebar.MenuSubButton
                            asChild
                            isActive={isActive}
                            className="cursor-pointer"
                          >
                            <p onClick={() => onNavigate(url)}>{title}</p>
                          </Sidebar.MenuSubButton>
                        </Sidebar.MenuSubItem>
                      ))}
                    </Sidebar.MenuSub>
                  </CollapsiblePrimitive.Content>
                </Sidebar.MenuItem>
              </CollapsiblePrimitive>
            );

          if (!isEmptyUrl && isEmptyItems)
            return (
              <Sidebar.MenuItem key={index}>
                <Sidebar.MenuButton asChild isActive={isActive}>
                  <p className="cursor-pointer" onClick={() => onNavigate(url)}>
                    <IconComponent />
                    {title}
                  </p>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            );

          return null;
        }
      )}
    </Sidebar.Menu>
  );
};

export const SidebarContent = () => {
  const pathname = usePathname() as PathKey;
  const sidebarGroupsActive = SidebarHelpers.getSidebarGroupsActive(pathname);

  return (
    <Sidebar.Content>
      <Sidebar.Group>
        {sidebarGroupsActive.map(({ title, menus }, index) => (
          <Fragment key={index}>
            <Sidebar.GroupLabel key={index}>{title}</Sidebar.GroupLabel>
            <SidebarMenu sidebarMenus={menus} />
          </Fragment>
        ))}
      </Sidebar.Group>
    </Sidebar.Content>
  );
};
