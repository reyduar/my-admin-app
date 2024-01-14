import { WidgetGrid } from "@/components";

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Welcome to the My Admin App</h1>
      <span className="text-xl">Dashboard</span>
      <WidgetGrid />
    </div>
  );
}
