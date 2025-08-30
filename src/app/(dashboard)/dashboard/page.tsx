import { RequireAuth } from "@/components";

export default function DashboardPage() {
  return (
    <RequireAuth>
      <div>Dashboard</div>
    </RequireAuth>
  );
}
