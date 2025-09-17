"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { Dialog } from "@/animate-ui";
import { cn } from "@/lib";
import { Button } from "@/shadcn-ui";

import { DialogSize, dialogSizeMap, DialogType } from "./useDialog.helpers";
import { DialogContextType, DialogProps } from "./useDialog.types";

const DialogContext = createContext<DialogContextType | null>(null);

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [dialogs, setDialogs] = useState<DialogProps[]>([]);

  const showDialog = useCallback((dialog: DialogProps) => {
    setDialogs((prev) => [...prev, dialog]);
  }, []);

  const hideDialog = useCallback(() => {
    setDialogs((prev) => prev.slice(0, -1));
  }, []);

  const hideAllDialogs = useCallback(() => {
    setDialogs([]);
  }, []);

  const currentDialog = dialogs[dialogs.length - 1];
  const { type, title, description, content, options } = currentDialog || {};
  const {
    size = DialogSize.MEDIUM,
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
    ...restOptions
  } = options || {};

  const handleConfirm = () => {
    onConfirm?.();
    hideDialog();
  };

  const handleCancel = () => {
    onCancel?.();
    hideDialog();
  };

  const contextValue: DialogContextType = useMemo(() => {
    return { showDialog, hideDialog, hideAllDialogs };
  }, [showDialog, hideDialog, hideAllDialogs]);

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      {currentDialog && (
        <Dialog open={true} onClose={hideDialog}>
          <Dialog.Panel {...restOptions} className={cn(dialogSizeMap[size])}>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
              {description && (
                <Dialog.Description>{description}</Dialog.Description>
              )}
            </Dialog.Header>
            {content}
            {type === DialogType.CONFIRM && (
              <Dialog.Footer>
                <Button variant="outline" onClick={handleCancel}>
                  {cancelText}
                </Button>
                <Button onClick={handleConfirm}>{confirmText}</Button>
              </Dialog.Footer>
            )}
          </Dialog.Panel>
        </Dialog>
      )}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const dialogContext = useContext(DialogContext);
  if (!dialogContext) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }
  return dialogContext;
};
