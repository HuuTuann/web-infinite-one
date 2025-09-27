import { ForwardRefExoticComponent, RefAttributes } from "react";

import { LucideProps, Wallet } from "lucide-react";

import { isEmpty, PathKey, PATHS } from "@/lib";

type SidebarMenu = {
  title: string;
  url?: string;
  urlActives: string[];
  isActive?: boolean;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  items?: SidebarMenuItem[];
};

type SidebarMenuItem = {
  title: string;
  url: string;
  urlActives: string[];
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
        url: PATHS.wallets,
        urlActives: [PATHS.wallets, PATHS.walletDetail.replace(":id", "")],
      },
    ],
  },
];

const isUrlActive = (pathname: PathKey, urlActives: string[]): boolean => {
  if (isEmpty(urlActives)) return false;

  return urlActives.some((u) => pathname.startsWith(u));
};

const getSidebarGroupsActive = (pathname: PathKey): SidebarGroup[] => {
  return sidebarGroups.map((group) => {
    const { menus } = group;

    return {
      ...group,
      menus: menus.map((menu) => {
        const { urlActives, items } = menu;
        const isEmptyItems = isEmpty(items);

        return {
          ...menu,
          isActive: isUrlActive(pathname, urlActives) && isEmptyItems,
          ...(!isEmptyItems && {
            items: items?.map((item) => {
              return {
                ...item,
                isActive: isUrlActive(pathname, urlActives),
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
