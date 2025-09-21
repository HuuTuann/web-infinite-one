"use client";

import * as React from "react";

import {
  CloseButton,
  CloseButtonProps,
  Description as DialogDescriptionPrimitive,
  Dialog as DialogPrimitive,
  DialogBackdrop as DialogBackdropPrimitive,
  type DialogBackdropProps as DialogBackdropPrimitiveProps,
  DialogPanel as DialogPanelPrimitive,
  type DialogPanelProps as DialogPanelPrimitiveProps,
  type DialogProps as DialogPrimitiveProps,
  DialogTitle as DialogTitlePrimitive,
  type DialogTitleProps as DialogTitlePrimitiveProps,
} from "@headlessui/react";
import {
  AnimatePresence,
  type HTMLMotionProps,
  motion,
  type Transition,
} from "motion/react";

type DialogProps<TTag extends React.ElementType = "div"> = Omit<
  DialogPrimitiveProps<TTag>,
  "static"
> & {
  className?: string;
  as?: TTag;
};

function Dialog<TTag extends React.ElementType = "div">({
  className,
  ...props
}: DialogProps<TTag>) {
  return (
    <AnimatePresence>
      {props?.open && (
        <DialogPrimitive
          data-slot="dialog"
          className={className}
          {...props}
          static
        />
      )}
    </AnimatePresence>
  );
}

type DialogBackdropProps<TTag extends React.ElementType = typeof motion.div> =
  Omit<DialogBackdropPrimitiveProps<TTag>, "transition"> &
    HTMLMotionProps<"div"> & {
      as?: TTag;
    };

function DialogBackdrop<TTag extends React.ElementType = typeof motion.div>(
  props: DialogBackdropProps<TTag>
) {
  const {
    as = motion.div,
    transition = { duration: 0.2, ease: "easeInOut" },
    ...rest
  } = props;

  return (
    <DialogBackdropPrimitive
      key="dialog-backdrop"
      data-slot="dialog-backdrop"
      as={as as React.ElementType}
      initial={{ opacity: 0, filter: "blur(4px)", transition }}
      animate={{ opacity: 1, filter: "blur(0px)", transition }}
      exit={{ opacity: 0, filter: "blur(4px)", transition }}
      {...rest}
    />
  );
}

type DialogFlipDirection = "top" | "bottom" | "left" | "right";

type DialogPanelProps<TTag extends React.ElementType = typeof motion.div> =
  Omit<DialogPanelPrimitiveProps<TTag>, "transition"> &
    Omit<HTMLMotionProps<"div">, "children"> & {
      from?: DialogFlipDirection;
      transition?: Transition;
      as?: TTag;
    };

function DialogPanel<TTag extends React.ElementType = typeof motion.div>(
  props: DialogPanelProps<TTag>
) {
  const {
    children,
    as = motion.div,
    from = "top",
    transition = { type: "spring", stiffness: 150, damping: 25 },
    ...rest
  } = props;

  const initialRotation =
    from === "bottom" || from === "left" ? "20deg" : "-20deg";
  const isVertical = from === "top" || from === "bottom";
  const rotateAxis = isVertical ? "rotateX" : "rotateY";

  return (
    <DialogPanelPrimitive
      key="dialog-panel"
      data-slot="dialog-panel"
      as={as as React.ElementType}
      initial={{
        opacity: 0,
        filter: "blur(4px)",
        transform: `perspective(500px) ${rotateAxis}(${initialRotation}) scale(0.8)`,
        transition,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        transform: `perspective(500px) ${rotateAxis}(0deg) scale(1)`,
        transition,
      }}
      exit={{
        opacity: 0,
        filter: "blur(4px)",
        transform: `perspective(500px) ${rotateAxis}(${initialRotation}) scale(0.8)`,
        transition,
      }}
      {...rest}
    >
      {(bag) => (
        <>{typeof children === "function" ? children(bag) : children}</>
      )}
    </DialogPanelPrimitive>
  );
}

type DialogCloseProps<TTag extends React.ElementType = "div"> =
  CloseButtonProps<TTag> & {
    as?: TTag;
  };

function DialogClose<TTag extends React.ElementType = "button">(
  props: DialogCloseProps<TTag>
) {
  const { as = "button", ...rest } = props;

  return (
    <CloseButton
      data-slot="dialog-close"
      as={as as React.ElementType}
      {...rest}
    />
  );
}

type DialogHeaderProps<TTag extends React.ElementType = "div"> =
  React.ComponentProps<TTag> & {
    as?: TTag;
  };

function DialogHeader<TTag extends React.ElementType = "div">({
  as: Component = "div",
  ...props
}: DialogHeaderProps<TTag>) {
  return <Component data-slot="dialog-header" {...props} />;
}

type DialogFooterProps<TTag extends React.ElementType = "div"> =
  React.ComponentProps<TTag> & {
    as?: TTag;
  };

function DialogFooter({ as: Component = "div", ...props }: DialogFooterProps) {
  return <Component data-slot="dialog-footer" {...props} />;
}

type DialogTitleProps<TTag extends React.ElementType = "h2"> =
  DialogTitlePrimitiveProps<TTag> & {
    as?: TTag;
    className?: string;
  };

function DialogTitle<TTag extends React.ElementType = "h2">(
  props: DialogTitleProps<TTag>
) {
  return <DialogTitlePrimitive data-slot="dialog-title" {...props} />;
}

type DialogDescriptionProps<TTag extends React.ElementType = "div"> =
  React.ComponentProps<typeof DialogDescriptionPrimitive<TTag>> & {
    as?: TTag;
    className?: string;
  };

function DialogDescription<TTag extends React.ElementType = "div">(
  props: DialogDescriptionProps<TTag>
) {
  return (
    <DialogDescriptionPrimitive data-slot="dialog-description" {...props} />
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
  DialogBackdropProps,
  DialogCloseProps,
  DialogDescriptionProps,
  DialogFlipDirection,
  DialogFooterProps,
  DialogHeaderProps,
  DialogPanelProps,
  DialogProps,
  DialogTitleProps,
};
