"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  AudioWaveform,
  BadgeCheck,
  Bell,
  BookOpen,
  Bot,
  ChevronRight,
  ChevronsUpDown,
  Command,
  CreditCard,
  Frame,
  GalleryVerticalEnd,
  LogOut,
  PieChart,
  Settings2,
  Sparkles,
  SquareTerminal,
} from "lucide-react";

import {
  Collapsible,
  DropdownMenu,
  Sidebar as AnimateUISidebar,
} from "@/animate-ui";
import { useIsMobile } from "@/hooks";
import { isEmpty, PathKey, PATHS } from "@/lib";
import { Avatar, Breadcrumb, Separator } from "@/shadcn-ui";

import SidebarHelpers, { SidebarMenu } from "./Sidebar.helpers";

const DATA = {
  user: {
    name: "Skyleen",
    email: "skyleen@example.com",
    avatar:
      "https://pbs.twimg.com/profile_images/1909615404789506048/MTqvRsjo_400x400.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
          isActive: true,
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
          isActive: true,
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

type SidebarMenuProps = {
  sidebarMenus: SidebarMenu[];
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

export function Sidebar() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const pathname = usePathname() as PathKey;
  const sidebarGroupsActive = useMemo(
    () => SidebarHelpers.getSidebarGroupsActive(pathname),
    [pathname]
  );

  return (
    <AnimateUISidebar.Provider>
      <AnimateUISidebar collapsible="icon">
        {/* Header */}
        <AnimateUISidebar.Header>
          <img
            src="/logo.svg"
            alt="Infinite One Logo"
            className="cursor-pointer"
            onClick={() => router.push(`${PATHS.budgetExpenseDashboard}`)}
          />
        </AnimateUISidebar.Header>

        {/* Content */}
        <AnimateUISidebar.Content>
          <AnimateUISidebar.Group>
            {sidebarGroupsActive.map(({ title, menus }, index) => (
              <React.Fragment key={index}>
                <AnimateUISidebar.GroupLabel key={index}>
                  {title}
                </AnimateUISidebar.GroupLabel>
                <Sidebar.Menu sidebarMenus={menus} />
              </React.Fragment>
            ))}
          </AnimateUISidebar.Group>
        </AnimateUISidebar.Content>

        {/* Footer */}
        <AnimateUISidebar.Footer>
          {/* Nav User */}
          <AnimateUISidebar.Menu>
            <AnimateUISidebar.MenuItem>
              <DropdownMenu>
                <DropdownMenu.Trigger asChild>
                  <AnimateUISidebar.MenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Avatar className="h-8 w-8 rounded-lg">
                      <Avatar.Image
                        src={DATA.user.avatar}
                        alt={DATA.user.name}
                      />
                      <Avatar.Fallback className="rounded-lg">
                        CN
                      </Avatar.Fallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {DATA.user.name}
                      </span>
                      <span className="truncate text-xs">
                        {DATA.user.email}
                      </span>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4" />
                  </AnimateUISidebar.MenuButton>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side={isMobile ? "bottom" : "right"}
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenu.Label className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <Avatar.Image
                          src={DATA.user.avatar}
                          alt={DATA.user.name}
                        />
                        <Avatar.Fallback className="rounded-lg">
                          CN
                        </Avatar.Fallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          {DATA.user.name}
                        </span>
                        <span className="truncate text-xs">
                          {DATA.user.email}
                        </span>
                      </div>
                    </div>
                  </DropdownMenu.Label>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Group>
                    <DropdownMenu.Item>
                      <Sparkles />
                      Upgrade to Pro
                    </DropdownMenu.Item>
                  </DropdownMenu.Group>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Group>
                    <DropdownMenu.Item>
                      <BadgeCheck />
                      Account
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                      <CreditCard />
                      Billing
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                      <Bell />
                      Notifications
                    </DropdownMenu.Item>
                  </DropdownMenu.Group>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>
                    <LogOut />
                    Log out
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu>
            </AnimateUISidebar.MenuItem>
          </AnimateUISidebar.Menu>
          {/* Nav User */}
        </AnimateUISidebar.Footer>
        <AnimateUISidebar.Rail />
      </AnimateUISidebar>

      <AnimateUISidebar.Inset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <AnimateUISidebar.Trigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <Breadcrumb.List>
                <Breadcrumb.Item className="hidden md:block">
                  <Breadcrumb.Link href="#">
                    Building Your Application
                  </Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator className="hidden md:block" />
                <Breadcrumb.Item>
                  <Breadcrumb.Page>Data Fetching</Breadcrumb.Page>
                </Breadcrumb.Item>
              </Breadcrumb.List>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </AnimateUISidebar.Inset>
    </AnimateUISidebar.Provider>
  );
}

Sidebar.Menu = SidebarMenu;
