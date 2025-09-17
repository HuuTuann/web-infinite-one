import * as React from "react";

import { XIcon } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import {
  Dialog as DialogPrimitive,
  DialogBackdrop as DialogBackdropPrimitive,
  type DialogBackdropProps as DialogBackdropPrimitiveProps,
  DialogClose as DialogClosePrimitive,
  type DialogCloseProps as DialogClosePrimitiveProps,
  DialogDescription as DialogDescriptionPrimitive,
  type DialogDescriptionProps as DialogDescriptionPrimitiveProps,
  DialogFooter as DialogFooterPrimitive,
  type DialogFooterProps as DialogFooterPrimitiveProps,
  DialogHeader as DialogHeaderPrimitive,
  type DialogHeaderProps as DialogHeaderPrimitiveProps,
  DialogPanel as DialogPanelPrimitive,
  type DialogPanelProps as DialogPanelPrimitiveProps,
  type DialogProps as DialogPrimitiveProps,
  DialogTitle as DialogTitlePrimitive,
  type DialogTitleProps as DialogTitlePrimitiveProps,
} from "../../../primitives";

type DialogProps<TTag extends React.ElementType = "div"> =
  DialogPrimitiveProps<TTag>;

function Dialog<TTag extends React.ElementType = "div">(
  props: DialogProps<TTag>
) {
  return <DialogPrimitive {...props} />;
}

type DialogCloseProps<TTag extends React.ElementType = "button"> =
  DialogClosePrimitiveProps<TTag>;

function DialogClose<TTag extends React.ElementType = "button">(
  props: DialogCloseProps<TTag>
) {
  return <DialogClosePrimitive {...props} />;
}

type DialogBackdropProps<TTag extends React.ElementType = typeof motion.div> =
  DialogBackdropPrimitiveProps<TTag>;

function DialogBackdrop<TTag extends React.ElementType = typeof motion.div>({
  className,
  ...props
}: DialogBackdropProps<TTag>) {
  return (
    <DialogBackdropPrimitive
      className={cn("fixed inset-0 z-50 bg-black/50", className)}
      {...props}
    />
  );
}

type DialogPanelProps<TTag extends React.ElementType = typeof motion.div> =
  DialogPanelPrimitiveProps<TTag> & {
    showCloseButton?: boolean;
  };

function DialogPanel<TTag extends React.ElementType = typeof motion.div>({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogPanelProps<TTag>) {
  return (
    <>
      <DialogBackdrop />
      <DialogPanelPrimitive
        className={cn(
          "bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg",
          className
        )}
        {...props}
      >
        {(bag) => (
          <>
            {typeof children === "function" ? children(bag) : children}
            {showCloseButton && (
              <DialogClosePrimitive className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogClosePrimitive>
            )}
          </>
        )}
      </DialogPanelPrimitive>
    </>
  );
}

type DialogHeaderProps<TTag extends React.ElementType = "div"> =
  DialogHeaderPrimitiveProps<TTag>;

function DialogHeader<TTag extends React.ElementType = "div">(
  props: DialogHeaderProps<TTag>
) {
  const { as = "div", className, ...rest } = props;

  return (
    <DialogHeaderPrimitive
      as={as}
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...rest}
    />
  );
}

type DialogFooterProps<TTag extends React.ElementType = "div"> =
  DialogFooterPrimitiveProps<TTag>;

function DialogFooter<TTag extends React.ElementType = "div">({
  className,
  ...props
}: DialogFooterProps<TTag>) {
  return (
    <DialogFooterPrimitive
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

type DialogTitleProps<TTag extends React.ElementType = "h2"> =
  DialogTitlePrimitiveProps<TTag>;

function DialogTitle<TTag extends React.ElementType = "h2">({
  className,
  ...props
}: DialogTitleProps<TTag>) {
  return (
    <DialogTitlePrimitive
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

type DialogDescriptionProps<TTag extends React.ElementType = "div"> =
  DialogDescriptionPrimitiveProps<TTag>;

function DialogDescription<TTag extends React.ElementType = "div">({
  className,
  ...props
}: DialogDescriptionProps<TTag>) {
  return (
    <DialogDescriptionPrimitive
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

Dialog.Close = DialogClose;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
Dialog.Header = DialogHeader;
Dialog.Panel = DialogPanel;
Dialog.Title = DialogTitle;

export default Dialog;
export type {
  DialogCloseProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogPanelProps,
  DialogProps,
  DialogTitleProps,
};
