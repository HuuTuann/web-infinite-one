enum DialogType {
  CONTENT = "content",
  CONFIRM = "confirm",
}

enum DialogSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  X_LARGE = "x-large",
}

const dialogSizeMap: Record<DialogSize, string> = {
  [DialogSize.SMALL]: "w-sm",
  [DialogSize.MEDIUM]: "w-md",
  [DialogSize.LARGE]: "w-3xl",
  [DialogSize.X_LARGE]: "w-4xl",
};

export { DialogSize, dialogSizeMap, DialogType };
