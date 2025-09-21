import { CardShadcn } from "@/frameworks-shadcn-ui";

type Props = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  leftSectionHeader?: React.ReactNode;
  footerSection?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  actionClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
};

export const Card = (props: Props) => {
  const {
    title,
    description,
    leftSectionHeader,
    children,
    footerSection,
    className,
    headerClassName,
    titleClassName,
    descriptionClassName,
    actionClassName,
    contentClassName,
    footerClassName,
  } = props;

  const isShowHeader = title || description || leftSectionHeader;

  return (
    <CardShadcn className={className}>
      {isShowHeader && (
        <CardShadcn.Header className={headerClassName}>
          {title && (
            <CardShadcn.Title className={titleClassName}>
              {title}
            </CardShadcn.Title>
          )}
          {description && (
            <CardShadcn.Description className={descriptionClassName}>
              {description}
            </CardShadcn.Description>
          )}
          {leftSectionHeader && (
            <CardShadcn.Action className={actionClassName}>
              {leftSectionHeader}
            </CardShadcn.Action>
          )}
        </CardShadcn.Header>
      )}
      <CardShadcn.Content className={contentClassName}>
        {children}
      </CardShadcn.Content>
      {footerSection && (
        <CardShadcn.Footer className={footerClassName}>
          {footerSection}
        </CardShadcn.Footer>
      )}
    </CardShadcn>
  );
};
