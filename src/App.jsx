import { Toaster } from "react-hot-toast";
import Router from "./routes";
import { HelmetProvider } from "react-helmet-async";
export default function App() {
  return (
    <HelmetProvider>
      <Toaster />
      <Router />
    </HelmetProvider>
  );
}
