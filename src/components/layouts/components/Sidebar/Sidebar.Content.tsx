import { Fragment, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

import { ChevronRight } from "lucide-react";

import { isEmpty, PathKey } from "@/lib";

import SidebarAnimate from "../../../ui/frameworks/animate-ui/components/radix/sidebar";
import Collapsible from "../../../ui/frameworks/animate-ui/primitives/radix/collapsible";

import SidebarHelpers, { type SidebarMenu } from "./Sidebar.helpers";

type SidebarMenuProps = {
  sidebarMenus: SidebarMenu[];
};

const SidebarMenu = ({ sidebarMenus }: SidebarMenuProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const onNavigate = useCallback(
    (url: string) => pathname !== url && router.push(url),
    [router, pathname]
  );

  return (
    <SidebarAnimate.Menu>
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
                <SidebarAnimate.MenuItem>
                  <Collapsible.Trigger asChild>
                    <SidebarAnimate.MenuButton tooltip={title}>
                      <IconComponent />
                      <span>{title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarAnimate.MenuButton>
                  </Collapsible.Trigger>
                  <Collapsible.Content>
                    <SidebarAnimate.MenuSub>
                      {items?.map(({ title, url, isActive }, index) => (
                        <SidebarAnimate.MenuSubItem key={index}>
                          <SidebarAnimate.MenuSubButton
                            asChild
                            isActive={isActive}
                            className="cursor-pointer"
                          >
                            <p onClick={() => onNavigate(url)}>{title}</p>
                          </SidebarAnimate.MenuSubButton>
                        </SidebarAnimate.MenuSubItem>
                      ))}
                    </SidebarAnimate.MenuSub>
                  </Collapsible.Content>
                </SidebarAnimate.MenuItem>
              </Collapsible>
            );

          if (!isEmptyUrl && isEmptyItems)
            return (
              <SidebarAnimate.MenuItem key={index}>
                <SidebarAnimate.MenuButton asChild isActive={isActive}>
                  <p className="cursor-pointer">
                    <IconComponent />
                    {title}
                  </p>
                </SidebarAnimate.MenuButton>
              </SidebarAnimate.MenuItem>
            );

          return null;
        }
      )}
    </SidebarAnimate.Menu>
  );
};

export const SidebarContent = () => {
  const pathname = usePathname() as PathKey;
  const sidebarGroupsActive = SidebarHelpers.getSidebarGroupsActive(pathname);

  return (
    <SidebarAnimate.Content>
      <SidebarAnimate.Group>
        {sidebarGroupsActive.map(({ title, menus }, index) => (
          <Fragment key={index}>
            <SidebarAnimate.GroupLabel key={index}>
              {title}
            </SidebarAnimate.GroupLabel>
            <SidebarMenu sidebarMenus={menus} />
          </Fragment>
        ))}
      </SidebarAnimate.Group>
    </SidebarAnimate.Content>
  );
};
