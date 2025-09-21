import * as React from "react";

import { XIcon } from "lucide-react";
import { motion } from "motion/react";

import {
  type DialogBackdropProps as DialogBackdropPrimitiveProps,
  type DialogCloseProps as DialogClosePrimitiveProps,
  type DialogDescriptionProps as DialogDescriptionPrimitiveProps,
  type DialogFooterProps as DialogFooterPrimitiveProps,
  type DialogHeaderProps as DialogHeaderPrimitiveProps,
  type DialogPanelProps as DialogPanelPrimitiveProps,
  DialogPrimitive,
  type DialogProps as DialogPrimitiveProps,
  type DialogTitleProps as DialogTitlePrimitiveProps,
} from "@/frameworks-animate-ui/primitives/headless";
import { cn } from "@/lib";

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
  return <DialogPrimitive.Close {...props} />;
}

type DialogBackdropProps<TTag extends React.ElementType = typeof motion.div> =
  DialogBackdropPrimitiveProps<TTag>;

function DialogBackdrop<TTag extends React.ElementType = typeof motion.div>({
  className,
  ...props
}: DialogBackdropProps<TTag>) {
  return (
    <DialogPrimitive.Backdrop
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
      <DialogPrimitive.Panel
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
              <DialogPrimitive.Close className="data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 cursor-pointer rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            )}
          </>
        )}
      </DialogPrimitive.Panel>
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
    <DialogPrimitive.Header
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
    <DialogPrimitive.Footer
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
    <DialogPrimitive.Title
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
    <DialogPrimitive.Description
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

Dialog.Backdrop = DialogBackdrop;
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
