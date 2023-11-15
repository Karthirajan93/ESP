import { Toaster } from "react-hot-toast";
import SettingsForm from "./Pages/SettingsForm";

export default function App() {
  return (
    <div className="w-screen">
      <Toaster />
      <SettingsForm />
    </div>
  );
}
