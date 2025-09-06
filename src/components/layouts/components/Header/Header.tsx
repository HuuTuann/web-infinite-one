import { usePathname } from "next/navigation";

import { LogOut } from "lucide-react";

import { DropdownMenu } from "@/animate-ui";
import { Avatar } from "@/shadcn-ui";

import { HeaderHelpers } from "./Header.helpers";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b p-4">
      <p className="text-2xl font-semibold text-slate-950">
        {HeaderHelpers.titles[pathname]}
      </p>

      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Avatar className="size-10">
            <Avatar.Fallback className="rounded-lg">CN</Avatar.Fallback>
          </Avatar>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content side="bottom" align="end" sideOffset={4}>
          <DropdownMenu.Label className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="h-8 w-8 rounded-lg">
                <Avatar.Image src={""} alt={"Avatar"} />
                <Avatar.Fallback className="rounded-lg">CN</Avatar.Fallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {"Huu Tuan Nguyen"}
                </span>
                <span className="truncate text-xs">
                  {"nhtuan010302@gmail.com"}
                </span>
              </div>
            </div>
          </DropdownMenu.Label>
          <DropdownMenu.Separator />

          <DropdownMenu.Item>
            <LogOut />
            Log out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </header>
  );
};
