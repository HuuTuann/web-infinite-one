import { cn } from "@/lib";

import { TypographyBlockquote } from "./Typography.Blockquote";
import {
  typographyClassNameMap,
  TypographyVariant,
  TypographyVariantValue,
} from "./Typography.helpers";
import { TypographyInlineCode } from "./Typography.InlineCode";
import { TypographyLarge } from "./Typography.Large";
import { TypographyLead } from "./Typography.Lead";
import { TypographyList, TypographyListItem } from "./Typography.List";
import { TypographyMuted } from "./Typography.Muted";
import { TypographySmall } from "./Typography.Small";

type Props = React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
  variant?: TypographyVariantValue;
  className?: string;
};

export const Typography = (props: Props) => {
  const { children, variant = TypographyVariant.P, className } = props;

  const Component = variant;

  return (
    <Component className={cn(className, typographyClassNameMap[variant])}>
      {children}
    </Component>
  );
};

Typography.Blockquote = TypographyBlockquote;
Typography.InlineCode = TypographyInlineCode;
Typography.Lead = TypographyLead;
Typography.Large = TypographyLarge;
Typography.Small = TypographySmall;
Typography.Muted = TypographyMuted;
Typography.List = TypographyList;
Typography.ListItem = TypographyListItem;
