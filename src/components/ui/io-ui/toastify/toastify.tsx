import {
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiNotificationFill,
  RiSpamFill,
} from "@remixicon/react";
import { toast as toastSonner } from "sonner";

import { Alert } from "@/components/ui/re-ui";

import { ToastVariants } from "./toastify.helpers";

type ToastifyOptions = {
  title: string;
  icon: React.ReactNode;
  variant: ToastVariants;
  duration?: number;
};

const toast = (options: ToastifyOptions) => {
  const { title, icon, variant, duration = 3500 } = options;

  toastSonner.custom(
    (t) => (
      <Alert variant={variant} close onClose={() => toastSonner.dismiss(t)}>
        <Alert.Icon>{icon}</Alert.Icon>
        <Alert.Title>{title}</Alert.Title>
      </Alert>
    ),
    { duration }
  );
};

export const Toastify = {
  Success: (title: string) => {
    toast({
      title,
      variant: ToastVariants.SUCCESS,
      icon: <RiCheckboxCircleFill />,
    });
  },
  Error: (title: string) => {
    toast({
      title,
      variant: ToastVariants.ERROR,
      icon: <RiErrorWarningFill />,
    });
  },
  Warning: (title: string) => {
    toast({ title, variant: ToastVariants.WARNING, icon: <RiSpamFill /> });
  },
  Info: (title: string) => {
    toast({
      title,
      variant: ToastVariants.INFO,
      icon: <RiNotificationFill />,
    });
  },
};
