import { DialogPanelProps } from "@/animate-ui";

import { DialogSize, DialogType } from "./useDialog.helpers";

type DialogProps = {
  type: DialogType;
  title: string;
  description: string;
  content: React.ReactNode;
  options?: DialogPanelProps & {
    size?: DialogSize;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
  };
};

type DialogContextType = {
  showDialog: (dialog: DialogProps) => void;
  hideDialog: () => void;
  hideAllDialogs: () => void;
};

export type { DialogContextType, DialogProps };
