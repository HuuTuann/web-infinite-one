import { BaseLayout } from "@/components";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function DashboardLayout({ children }: Props) {
  return <BaseLayout>{children}</BaseLayout>;
}
