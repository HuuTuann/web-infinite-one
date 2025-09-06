"use client";

import React from "react";

import { Sidebar as AnimateUISidebar } from "@/animate-ui";

import { SidebarContent, SidebarHeader } from "./components";

type SidebarProps = {
  children: React.ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <AnimateUISidebar.Provider>
      <AnimateUISidebar collapsible="icon">
        <Sidebar.Header />
        <Sidebar.Content />
      </AnimateUISidebar>

      <AnimateUISidebar.Inset>{children}</AnimateUISidebar.Inset>
    </AnimateUISidebar.Provider>
  );
};

Sidebar.Header = SidebarHeader;
Sidebar.Content = SidebarContent;
