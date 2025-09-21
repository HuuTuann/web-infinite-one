import { Tabs as TabAnimate } from "@/frameworks-animate-ui/components/animate";

import { TabContents, TabOptions } from "./Tabs.helpers";

type Props = {
  defaultValue: string;
  tabOptions: TabOptions[];
  tabContents: TabContents[];
  className?: string;
  listClassName?: string;
  contentClassName?: string;
};

export const Tabs = (props: Props) => {
  const {
    defaultValue,
    tabOptions,
    tabContents,
    className,
    contentClassName,
    listClassName,
  } = props;

  return (
    <TabAnimate className={className}>
      <TabAnimate.List defaultValue={defaultValue} className={listClassName}>
        {tabOptions.map(({ value, label }) => (
          <TabAnimate.Trigger key={value} value={value}>
            {label}
          </TabAnimate.Trigger>
        ))}
      </TabAnimate.List>
      <TabAnimate.Contents className={contentClassName}>
        {tabContents.map(({ value, children }) => (
          <TabAnimate.Content key={value} value={value}>
            {children}
          </TabAnimate.Content>
        ))}
      </TabAnimate.Contents>
    </TabAnimate>
  );
};
