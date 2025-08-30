import { RequireAuth } from "@/components";

export default async function DashboardPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <RequireAuth>
      <div>Dashboard</div>
    </RequireAuth>
  );
}
