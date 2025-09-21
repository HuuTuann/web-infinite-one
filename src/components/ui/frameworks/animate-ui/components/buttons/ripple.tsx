"use client";

import * as React from "react";

import { type VariantProps } from "class-variance-authority";

import {
  RippleButtonPrimitive,
  type RippleButtonProps as RippleButtonPrimitiveProps,
  type RippleButtonRipplesProps as RippleButtonRipplesPrimitiveProps,
} from "@/frameworks-animate-ui/primitives/buttons";
import { cn } from "@/lib";

import { buttonVariants } from "./button";

const rippleButtonVariants = {
  default: "[--ripple-button-ripple-color:var(--primary-foreground)]",
  accent: "[--ripple-button-ripple-color:var(--accent-foreground)]",
  destructive: "[--ripple-button-ripple-color:var(--destructive-foreground)]",
  outline: "[--ripple-button-ripple-color:var(--foreground)]",
  secondary: "[--ripple-button-ripple-color:var(--secondary-foreground)]",
  ghost: "[--ripple-button-ripple-color:var(--foreground)]",
  link: "[--ripple-button-ripple-color:var(--primary-foreground)]",
};

type RippleButtonProps = RippleButtonPrimitiveProps &
  VariantProps<typeof buttonVariants>;

function RippleButton({
  className,
  variant,
  size,
  ...props
}: RippleButtonProps) {
  return (
    <RippleButtonPrimitive
      className={cn(
        buttonVariants({ variant, size, className }),
        rippleButtonVariants[variant as keyof typeof rippleButtonVariants]
      )}
      {...props}
    />
  );
}

type RippleButtonRipplesProps = RippleButtonRipplesPrimitiveProps;

function RippleButtonRipples(props: RippleButtonRipplesProps) {
  return <RippleButtonPrimitive.Ripples {...props} />;
}

RippleButton.Ripples = RippleButtonRipples;

export default RippleButton;
export type { RippleButtonProps, RippleButtonRipplesProps };
