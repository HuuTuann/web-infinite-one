import { Header, Sidebar } from "../components";

export function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar>
        <Header />
        <div className="h-full w-full overflow-hidden bg-slate-50 p-4">
          {children}
        </div>
      </Sidebar>
    </div>
  );
}
