import ProfileCard from "@/components/ProfileCard";
import TopBar from "@/components/TopBar";

export default function DashboardPage() {
  return (
    <>
      <TopBar />
    <main className="grid grid-cols-4 gap-6 p-8">
      <div className="col-span-1">
        <ProfileCard />
      </div>
      <div className="col-span-3">
        {/* Outros componentes da dashboard */}
      </div>
    </main>
    </>
  );
}
