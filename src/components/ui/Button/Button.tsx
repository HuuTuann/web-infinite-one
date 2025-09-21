import { PuffLoader } from "react-spinners";

import { ButtonProps, ButtonShadcn } from "@/frameworks-shadcn-ui";
import { cn } from "@/lib";

type Props = ButtonProps & {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const Button = (props: Props) => {
  const {
    isLoading,
    className,
    children,
    leftIcon,
    rightIcon,
    disabled,
    ...rest
  } = props;
  const { variant = "default" } = props;

  return (
    <ButtonShadcn
      type="button"
      {...rest}
      disabled={isLoading || disabled}
      className={cn(className, "cursor-pointer")}
    >
      {isLoading && (
        <PuffLoader color={variant === "default" ? "#fff" : "#000"} size={24} />
      )}
      {!isLoading && leftIcon}
      {children}
      {rightIcon}
    </ButtonShadcn>
  );
};
