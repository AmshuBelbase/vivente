import AdminDashboard from "./AdminDashboard";

export const metadata = {
  title: "Admin — Vivente",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminDashboard />;
}
