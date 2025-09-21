type TabOptions = {
  value: string;
  label: string;
};

type TabContents = {
  value: string;
  children: React.ReactNode;
};

export type { TabContents, TabOptions };
