import * as React from "react";

import { XIcon } from "lucide-react";

import {
  type SheetCloseProps as SheetClosePrimitiveProps,
  type SheetContentProps as SheetContentPrimitiveProps,
  type SheetDescriptionProps as SheetDescriptionPrimitiveProps,
  type SheetFooterProps as SheetFooterPrimitiveProps,
  type SheetHeaderProps as SheetHeaderPrimitiveProps,
  type SheetOverlayProps as SheetOverlayPrimitiveProps,
  SheetPrimitive,
  type SheetProps as SheetPrimitiveProps,
  type SheetTitleProps as SheetTitlePrimitiveProps,
  type SheetTriggerProps as SheetTriggerPrimitiveProps,
} from "@/frameworks-animate-ui/primitives/radix";
import { cn } from "@/lib";

type SheetProps = SheetPrimitiveProps;

function Sheet(props: SheetProps) {
  return <SheetPrimitive {...props} />;
}

type SheetTriggerProps = SheetTriggerPrimitiveProps;

function SheetTrigger(props: SheetTriggerProps) {
  return <SheetPrimitive.Trigger {...props} />;
}

type SheetOverlayProps = SheetOverlayPrimitiveProps;

function SheetOverlay({ className, ...props }: SheetOverlayProps) {
  return (
    <SheetPrimitive.Overlay
      className={cn("fixed inset-0 z-50 bg-black/50", className)}
      {...props}
    />
  );
}

type SheetCloseProps = SheetClosePrimitiveProps;

function SheetClose(props: SheetCloseProps) {
  return <SheetPrimitive.Close {...props} />;
}

type SheetContentProps = SheetContentPrimitiveProps & {
  showCloseButton?: boolean;
};

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetContentProps) {
  return (
    <SheetPrimitive.Portal>
      <SheetOverlay />
      <SheetPrimitive.Content
        className={cn(
          "bg-background fixed z-50 flex flex-col gap-4 shadow-lg",
          side === "right" && "h-full w-[350px] border-l",
          side === "left" && "h-full w-[350px] border-r",
          side === "top" && "h-[350px] w-full border-b",
          side === "bottom" && "h-[350px] w-full border-t",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
            <XIcon className="size-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
        )}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
}

type SheetHeaderProps = SheetHeaderPrimitiveProps;

function SheetHeader({ className, ...props }: SheetHeaderProps) {
  return (
    <SheetPrimitive.Header
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

type SheetFooterProps = SheetFooterPrimitiveProps;

function SheetFooter({ className, ...props }: SheetFooterProps) {
  return (
    <SheetPrimitive.Footer
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

type SheetTitleProps = SheetTitlePrimitiveProps;

function SheetTitle({ className, ...props }: SheetTitleProps) {
  return (
    <SheetPrimitive.Title
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

type SheetDescriptionProps = SheetDescriptionPrimitiveProps;

function SheetDescription({ className, ...props }: SheetDescriptionProps) {
  return (
    <SheetPrimitive.Description
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

Sheet.Close = SheetClose;
Sheet.Content = SheetContent;
Sheet.Description = SheetDescription;
Sheet.Footer = SheetFooter;
Sheet.Header = SheetHeader;
Sheet.Overlay = SheetOverlay;
Sheet.Title = SheetTitle;
Sheet.Trigger = SheetTrigger;

export default Sheet;

export type {
  SheetCloseProps,
  SheetContentProps,
  SheetDescriptionProps,
  SheetFooterProps,
  SheetHeaderProps,
  SheetProps,
  SheetTitleProps,
  SheetTriggerProps,
};
