import Sidebar from "../../components/Guides/dashboard/Sidebar";

export default function GuideDashboard() {
  return (
    <div className="flex bg-[#11212D] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-white text-3xl font-bold">
          Guide Dashboard
        </h1>
      </div>
    </div>
  );
}