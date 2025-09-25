import { ForwardRefExoticComponent, RefAttributes } from "react";

import { LucideProps, Wallet } from "lucide-react";

import { isEmpty, PathKey, PATHS } from "@/lib";

type SidebarMenu = {
  title: string;
  url?: string;
  isActive?: boolean;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  items?: SidebarMenuItem[];
};

type SidebarMenuItem = {
  title: string;
  url: string;
  isActive?: boolean;
};

type SidebarGroup = {
  title: string;
  menus: SidebarMenu[];
};

const sidebarGroups: SidebarGroup[] = [
  {
    title: "Modules",
    menus: [
      {
        title: "Wallet",
        icon: Wallet,
        url: PATHS.wallet,
      },
    ],
  },
];

const getSidebarGroupsActive = (pathname: PathKey): SidebarGroup[] => {
  return sidebarGroups.map((group) => {
    const { menus } = group;

    return {
      ...group,
      menus: menus.map((menu) => {
        const { url, items } = menu;
        const isEmptyItems = isEmpty(items);

        return {
          ...menu,
          isActive: url === pathname && isEmptyItems,
          ...(!isEmptyItems && {
            items: items?.map((item) => {
              const { url } = item;
              return {
                ...item,
                isActive: url === pathname,
              };
            }),
          }),
        };
      }),
    };
  });
};

const SidebarHelpers = {
  sidebarGroups,
  getSidebarGroupsActive,
};

export default SidebarHelpers;
export type { SidebarGroup, SidebarMenu, SidebarMenuItem };
