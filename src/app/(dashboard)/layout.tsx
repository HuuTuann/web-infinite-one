import { Sidebar } from "@/components/layouts/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <h1>Dashboard</h1>
      {children}
    </div>
  );
}
