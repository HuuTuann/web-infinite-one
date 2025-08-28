import { RequireAuth } from "@/modules/auth/components";

export default function DashboardPage() {
  return (
    <RequireAuth>
      <div>Dashboard</div>
    </RequireAuth>
  );
}
