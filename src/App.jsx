import { Toaster } from "react-hot-toast";
import Dashboard from "./Pages/Dashboard";

export default function App() {
  return (
    <div className="w-screen">
      <Toaster />
      <Dashboard />
    </div>
  );
}
