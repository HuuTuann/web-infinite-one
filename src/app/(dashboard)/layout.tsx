import { BaseLayout } from "@/components/layouts";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function DashboardLayout({ children }: Props) {
  return <BaseLayout>{children}</BaseLayout>;
}
