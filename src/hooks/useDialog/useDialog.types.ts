import { DialogPanelProps } from "@/frameworks-animate-ui/components/headless";

import { DialogSize, DialogType } from "./useDialog.helpers";

type DialogProps = {
  type: DialogType;
  title: string;
  content: React.ReactNode;
  description?: string;
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
